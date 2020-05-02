import axios from 'axios';

export function getPhoto (term) {
  // PUBLIC api for unsplash photos 
  const API_KEY = process.env.REACT_APP_UNSPLASH_KEY;
  
  const reqUrl = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;
  return axios.get(reqUrl, {
    params: {
      query: term,
    }
  })
  .then(res => {return res})
  .catch(err => {return err});
};
