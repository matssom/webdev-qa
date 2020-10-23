const config = {
    dev:{
        questionAPI: {
            baseURL: 'http://localhost:1337',
            paths: {
                qna: '/qnas'
            }
        }
    },
    prod: {
        questionAPI: {
            baseURL: 'https://git.heroku.com/webdev-qa.git',
            paths: {
                qna: '/qnas'
            }
        }
    }
};

export default process.env ? config.dev : config.prod;