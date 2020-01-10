import express from 'express';
import {MOVIEDB_POPULARLIST_BASEURL, MOVIEDB_API_KEY, MOVIEDB_MOVIEDETAIL_BASEURL} from '../../shared/constants';
import {callApi} from '../../shared/utilities';

const api = express.Router();

//Will fetch pages of popular movies from the movie DB API by page number
api.get('/popularmovies/:page?', (req,res) =>{
  let pageNum = '';
  //console.log(`popularmovies params: ${req.params.page}`);
  
  if(req.params.page !== undefined){
    //TODO: handle bad page number here
    pageNum = '&page=' + req.params.page;
  }
  else{
    pageNum = '&page=1';
  }
  
  //console.log(`pageNum: ${pageNum}`);

  callApi(`${MOVIEDB_POPULARLIST_BASEURL}?api_key=${MOVIEDB_API_KEY}${pageNum}`)
      .then(data => res.send({api_data: data, error: {}}))
      .catch(err => res.send({api_data: {}, error: err}));

});

//Will fetch the details of a particular movie, from the movie DB API, given the movie DB movie ID
api.get('/moviedetail/:movieid', (req,res) =>{
  
  callApi(`${MOVIEDB_MOVIEDETAIL_BASEURL}${req.params.movieid}?api_key=${MOVIEDB_API_KEY}`)
      .then(data => res.send({api_data: data, error: {}}))
      .catch(err => res.send({api_data: {}, error: err}));

});

export default api;
