
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
//import { withRouter } from 'react-router-dom'

class AppContainer extends React.Component {

    render(){
        const serverState = this.props.serverState;
        return (
            
                <Switch>
                {routes.map(route => (
                    <Route key={route.key} {...route} render={(routerProps) => route.renderComponent(routerProps, serverState)} />
                ))}
                </Switch>
            
            
            
        )
    }
}

//export default withRouter(AppContainer);
export default AppContainer;