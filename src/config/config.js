const dotenv = require('dotenv').config();

// Paypal
const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
const PAYPAL_API = process.env.PAYPAL_API; // url sandbox or live for your app

// Server
const PORT = process.env.PORT || 3000;
const HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.HOST_FRONT
    : 'http://localhost:' + PORT;

module.exports = {
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
  PAYPAL_API,
  PORT,
  HOST,
};
