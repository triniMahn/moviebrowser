import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../shared/routes';
import HTML from '../shared/components/HTML';
import AppContainer from '../shared/components/AppContainer';

export default function renderRoute(req, res) {
  const branch = matchRoutes(routes, req.url);
  const promises = [];

  //For each matched route, get the function from the route definition that will do a server-side fetch of the data needed to render the component for the route -- on the server side
  branch.forEach(({ route, match }) => {
    if (route.loadData) {
      //push each function into an array so that we can execute all of the async fetches and then start assembling the UI with the data on the server (see below)
      promises.push(route.loadData(match));
    }
  });

  Promise.all(promises).then(data => {

    // console.log('renderRoute data: ');
    // console.log(data);

    //Collect all of the fetched data into one object
    const preloadedData = data.reduce((context, data) => Object.assign(context, data), {});
    const context = {};

    // console.log('preloaded data: ');
    // console.log(preloadedData);

    //Give the top level component container, AppContainer, the previously fetched data so that we can "render"/assemble the markup with the data, server-side
    const app = <StaticRouter location={req.url} context={context}><AppContainer serverState={preloadedData.api_data}/></StaticRouter>;

    //use this react-dom method to do the react component to markup "conversion"
    const appString = renderToString(app);

    //stringify the previously fetched data so that we can send it to the client to make it available client side -- if needed when the components are "hydrated" client side
    const preloadedDataString = JSON.stringify(preloadedData.api_data);

    const html = renderToString(<HTML html={appString} serverState={preloadedDataString}/>);

    //send all the markup to the browser
    return res.send(`<!DOCTYPE html>${html}`)

  });
}
