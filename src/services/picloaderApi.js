import axios from 'axios';

export function getPhoto(term) {
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

export function parseErr(response) {
    if (response.response) {
      if (response.response.data) {
        if (response.response.data.errors && response.response.data.errors.length > 0) {
          return response.response.data.errors[0];
        }
        if (response.response.data.errfor) {
          let errorMessage = '';
          for (let key in response.response.data.errfor) {
            errorMessage += key + ' ' + response.response.data.errfor[key] + ' ';
          }
          return errorMessage;
        }
      }
    }
    return 'Oops! An error has occured!';
  
}