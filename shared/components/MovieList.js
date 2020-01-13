
import React from 'react';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const titles = this.props.movieCollection;
        let rows = [];

        for(let i = 0; i < titles.length; i++){
            let cols = [];    
            
            let result = titles[i];
            let col = <MovieListItem key={result.id} movieId={result.id} posterImg={result.poster_path}></MovieListItem>;
            cols.push(col);

            if(i+1 < titles.length){
                result = titles[i + 1];
                cols.push(<MovieListItem key={result.id} movieId={result.id} posterImg={result.poster_path}></MovieListItem>);
                i++;
            }

            rows.push(<div className="row" key={i}>{cols}</div>);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default MovieList;