import React from 'react';
import Header from './Header';
import getFromPreloadedState from '../preloadedStateUtils';
import {getMovieDetails} from '../routeDataLoaders';
import {MOVIEDB_DETAIL_POSTERIMG_BASEURL} from '../constants';

const yearStyle = {
    width: '54px',
    height: '29px',
    fontFamily: 'Helvetica',
    fontSize: '24px',
    fontWeight: '300',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#747474'
};

const titleStyle = {
    height: '38px',
    fontFamily: 'Helvetica',
    fontSize: '24px',
    fontWeight: '300',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff',
    marginLeft: '24px',
    marginRight: '24px',
};

const runtimeStyle = {
    width: '86px',
    height: '29px',
    fontFamily: 'Helvetica',
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'oblique',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#747474',
};

const ratingStyle = {
    width: '45px',
    height: '19px',
    fontFamily: 'Helvetica',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
    paddingTop: '16px'
};

class MovieDetail extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: {}
        };
    }

    componentWillMount() {
        //console.log(`will mount props: ${JSON.stringify(this.props)}`);
        
        let movieDetails = getFromPreloadedState('',this.props.serverState);

        //Use the data made available on page load from the server. NOTE: This is not ideal, but this is where libraries like Redux help immensely with state mgmt
        if(movieDetails !== undefined && movieDetails != null && movieDetails.hasOwnProperty('id')){
            //let movieDetails = this.props.serverState;
            this.setState({movieDetails: Object.assign(this.state.movieDetails, movieDetails)});
            console.log(`MovieDetail : details from window state`);
        }
        else{ //OR, load the data asyc upon SPA navigation
            getMovieDetails(this.props.match).then(
                (res) => {this.setState({movieDetails: Object.assign(this.state.movieDetails, res.api_data)});} 
            );
            console.log(`MovieDetail : details from API call`);
        }
        
    }
    
    //could move into utilities if necessary
    extractReleaseYear(releaseDate){
        const yearEx = /^(\d{4})-\d{2}-\d{2}$/;
        let matches = yearEx.exec(releaseDate);
        if(matches != null && matches.length == 2){
            return matches[1];
        }

        return 'Release year unknown';
    }

    render() {
        const headerTitle = "Movie Detail";

        console.log('rendering: MovieDetail');
        
        const details = this.state.movieDetails;
        const posterImg = `${MOVIEDB_DETAIL_POSTERIMG_BASEURL}${details.poster_path}`;
        const releaseYear = this.extractReleaseYear(details.release_date);
        
        return (
            <div className="container">
                <Header headerTitle={headerTitle} showBackButton={true}/>
                <div className="row" style={{boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.5)', backgroundColor: '#009688', height: '80.9px'}}>
                    <div className="col" style={{paddingTop:'15px'}}>
                        <span style={titleStyle} className="align-middle">{details.original_title}</span>
                    </div>
                </div>
                <div className="row" style={{marginLeft: '24px', marginRight: '24px', marginTop:'20px'}}>
                    <div className="col-6">
                        <img src={posterImg} className="img-fluid"></img>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h1 style={yearStyle}>{releaseYear}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span style={runtimeStyle}>{details.runtime} min</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span style={ratingStyle}>{details.vote_average}/10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginLeft: '24px', marginRight: '24px', marginTop:'20px'}}>
                    <div className="col">
                        <p style={{fontSize:'12px'}}>{details.overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetail;
