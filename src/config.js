import React from 'react';

const config = {
    dev:{
        questionAPI: {
            baseURL: 'http://localhost:1337',
            paths: {
                topic: '/question-types',
                qna: '/qnas'
            }
        }
    },
    prod: {
        questionAPI: {
            baseURL: 'https://webdev-qa.herokuapp.com',
            paths: {
                qna: '/qnas',
                topic: '/question-types'
            }
        }
    }
};

const ReactIsInDevelomentMode = () => { 
    return '_self' in React.createElement('div');
}

export default ReactIsInDevelomentMode() ? config.dev : config.prod;