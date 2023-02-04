const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.listen(app.get('port'), () => {
  console.log(`app run on http://localhost:${app.get('port')}`);
});

module.exports = app;
