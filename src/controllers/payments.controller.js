// const { Usersubs } = require('../models/User.model');
const dayjs = require('dayjs');
const axios = require('axios');
const {
  PAYPAL_API,
  HOST,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require('../config/config');
const Usersubs = require('../models/User.models');
console.log(PAYPAL_API_CLIENT);

const prueba = (req, res) => {
  res.send('llega');
};

const saveUser = (req, res) => {
  res.send(req.body);
};
module.exports = {
  prueba,
  saveUser,
};
