const config = {
    dev:{
        questionAPI: {
            baseURL: 'http://localhost:1337'
        }
    },
    prod: {
        questionAPI: {
            baseURL: 'http://localhost:1337'
        }
    }
};

export default process.env ? config.dev : config.prod;