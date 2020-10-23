import axios from 'axios';
import config from './config';

const fetchQuestions = () => {
    return axios.get(`${config.questionAPI.baseURL}/question-and-answers`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

export default fetchQuestions;