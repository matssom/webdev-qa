import axios from 'axios';
import config from '../config';

const fetch = (path) => {
    return axios.get(`${config.questionAPI.baseURL}${path}`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

export default fetch;