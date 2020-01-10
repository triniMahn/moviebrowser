import fetch from 'isomorphic-fetch';

export const callApi = async function (endpoint) {
    const response = await fetch(endpoint);
    const body = await response.json();
  
    if (response.status !== 200) throw Error(body.message);
  
    return body;
}