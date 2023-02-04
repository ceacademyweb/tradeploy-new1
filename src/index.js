const app = require('./server/server');
const conn = require('./connection/connection');
const router = require('./routes/payment.routes');

app.use(router);
