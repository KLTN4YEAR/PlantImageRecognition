const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });
const mongo = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGOLAB_URI ||
      process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || 'localhost') + ':' +
      (process.env.MONGO_PORT || '27017') +
      '/RecognitionPlant'
  }
  
  module.exports=mongo;