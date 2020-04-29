const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,

  mongoUri: process.env.MONGOLAB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/RecognitionPlant',

  tokenLife: '1h',
  jwtSecret: 'your tokenSerect',

  oauth: {
    google: {
      clientID: '242010101479-3agf57mh6kaoagi90mi154k8l6i9ouf2.apps.googleusercontent.com',
      clientSecret: 'ijBlI-T_30EiM-Dy8PWq70zr'
    },
    facebook: {
      clientID: '835692456850679',
      clientSecret: 'a5f8a913885000c5fd771f7ace9bca5d'
    }
  }
}

module.exports = config;