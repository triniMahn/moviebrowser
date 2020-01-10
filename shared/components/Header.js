
import React from 'react';
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
    
    constructor(props){
        super(props);
        //goBack, by default, will be bound to the instance of the html element (via onClick)
        this.goBack = this.goBack.bind(this);
    }
  
    goBack(){
        this.props.history.goBack();
    }
    
    render() {
        const title = this.props.headerTitle;
        let backButton = '';
        if(this.props.showBackButton){
            backButton = <a style={{color:'#fff',fontSize:'32px',marginRight:'5px'}} onClick={this.goBack}>&#60;</a>
        }

        return (
            <nav className="navbar navbar-dark bg-dark sticky-top">
                <span className="navbar-brand mb-0 h1">{backButton}{title}</span>
            </nav>

    );
  }
}

//withRouter necessary so that we have this.props.history.goBack() available to us
export default withRouter(Header);