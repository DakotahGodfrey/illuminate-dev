const mongoose = require('mongoose');
const keys = require('../keys');

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(keys.mongo_uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`Mongo DB connected: ${dbConnection.connection.host}`);
  } catch (error) {
    console.error(`failed to connect to Database: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
