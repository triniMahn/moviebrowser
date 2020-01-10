
import React from 'react';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const titles = this.props.movieCollection;
        return (
            <div className="row">
                {
                    titles.map((result)=><MovieListItem key={result.id} movieId={result.id} posterImg={result.poster_path}></MovieListItem>)
                }
            </div>
        );
    }
}

export default MovieList;