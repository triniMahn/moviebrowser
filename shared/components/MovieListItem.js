
import React from 'react';
import { Link } from 'react-router-dom';
import {MOVIEDB_POSTERIMG_BASEURL} from '../constants';

class MovieListItem extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const movieId = `/movie-detail/${this.props.movieId}`;
        const posterURL = `${MOVIEDB_POSTERIMG_BASEURL}${this.props.posterImg}`;

        return (
            <div className="col-6"><Link to={movieId}><img src={posterURL} className="img-fluid"/></Link></div>
        );
    }
}

export default MovieListItem;