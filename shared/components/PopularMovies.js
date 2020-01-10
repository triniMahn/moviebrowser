import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import getFromPreloadedState from '../preloadedStateUtils';
import {getPopularMovies} from '../routeDataLoaders';

class PopularMovies extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            movieCollection: [],
            curResultsPage: 1
        };
        this.getMoreMovies = this.getMoreMovies.bind(this);
    }

    componentWillMount() {
        const movieCollectionArr = getFromPreloadedState('results',this.props.serverState);
        this.setState({movieCollection: this.state.movieCollection.concat(movieCollectionArr)});
    }
  
    getMoreMovies() {
        let nextPage = this.state.curResultsPage + 1;
        getPopularMovies(nextPage).then(
            (res) => {
                this.setState({movieCollection: this.state.movieCollection.concat(res.api_data.results), curResultsPage: nextPage});
                
            }
        );
    }

    render() {
        const headerTitle = "Popular Movies";

        console.log('rendering: PopularMovies');
        
        let list = <h2>No results</h2>;
        if(this.state.movieCollection.length > 0){
            list = <MovieList movieCollection={this.state.movieCollection}></MovieList>;
        }

        return (
            <div className="container">
                <Header headerTitle={headerTitle}/>
                {list}
                {/* TODO: hide this when this.state.curResultsPage === 500 */}
                <div className="row" style={{marginTop:'15px', marginBottom:'15px'}}>
                    <div className="col text-center">
                        <button type="button" className="btn btn-outline-primary" onClick={this.getMoreMovies}>Load More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularMovies;
