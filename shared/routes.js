import React from 'react';
import PopularMovies from './components/PopularMovies';
import NotFound from './components/NotFound';
import {getPopularMovies, getMovieDetails} from './routeDataLoaders';
import MovieDetail from './components/MovieDetail';

const routes = [
    {
      key: 'path-home',
      path: '/',
      exact: true,
      loadData: getPopularMovies,
      renderComponent: (routerProps, serverState) => <PopularMovies {...routerProps} serverState={serverState} />
    },
    {
      key: 'path-about',
      path: '/movie-detail/:detailID',
      exact: true,
      loadData: getMovieDetails,
      renderComponent: (routerProps, serverState) => {
        //return <About {...routerProps} serverState={serverState}/>
        return <MovieDetail {...routerProps} serverState={serverState}/>
      }
    },
    {
      key: 'path-not-found',
      path: '*',
      restricted: false,
      renderComponent: (routerProps, serverState) => <NotFound {...routerProps} serverState={serverState}/>
    }
];

export default routes;
