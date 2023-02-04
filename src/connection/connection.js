const mongoose = require('mongoose');
const connOBJ = require('../config/connection.config');

mongoose.set('strictQuery', false);
const mongodb = connOBJ.mongodb;

// const url = `mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{
//   MONGOHOST,
// }}:${{ MONGOPORT }}`;
// const url = `mongodb://localhost:27017/suscriptions`;
const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.host}:${mongodb.port}`;

// console.log(url);
const conn = mongoose
  .connect(url)
  .then((db) => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log('error:', err);
  });

// const conn = await mongoose.connect(url)

module.exports = conn;
