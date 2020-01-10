import {callApi} from './utilities';

//The follow functions will appear in the react router route definition. They allow us to retrieve data so that the UIs can be assembled server side

export const getPopularMovies = (page) => {
    let pageNum = 1;
    if(page !== undefined){
        pageNum = page;
    }

    return callApi(`http://localhost:3000/api/popularmovies/${pageNum}`);
};

export const getMovieDetails = (match) => {
    //console.log(`getMovieDetails match: ${JSON.stringify(match)}`);
    
    let movieId = match.params.detailID;
    return callApi(`http://localhost:3000/api/moviedetail/${movieId}`);
};

