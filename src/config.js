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
            baseURL: 'https://git.heroku.com/webdev-qa.git',
            paths: {
                qna: '/qnas',
                topic: '/question-types'
            }
        }
    }
};

export default process.env ? config.dev : config.prod;