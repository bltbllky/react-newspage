import Axios from 'axios';

export default class SerpAPI {

  static async getResult(params,callback) {
    await Axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_URL}search.json?engine=google&q=${encodeURI(params)}&api_key=${process.env.REACT_APP_API_KEY}`,{
      headers:{
        'Content-Type':'text/plain'
      }
    })
                .then(resp => {
                  callback(resp.data, false);
                })
                .catch((error) => {
                  if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                  } else if (error.request) {
                      console.log(error.request);
                  } else {
                      console.log('Error', error.message);
                  }
                  console.log(error.config);
              });
  }

  static async getNews(params,callback) {
    await Axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_URL}search.json?q=${encodeURI(params)}&lr=lang_en&tbm=nws&api_key=${process.env.REACT_APP_API_KEY}`,{
      headers:{
        'Content-Type':'text/plain',
      }
    })
                .then(resp => {
                  callback(resp.data, false);
                })
                .catch((error) => {
                  if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                  } else if (error.request) {
                      console.log(error.request);
                  } else {
                      console.log('Error', error.message);
                  }
                  console.log(error.config);
              });
  }
  

}