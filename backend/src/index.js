require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connection = require('./database/database');

const routes = require('./routes');

const app = express();

try {
  connection.authenticate();
  console.log('\033[1;33m[ MYSQL ] \033[0;0mMYSQL conectado.');
} catch (err) {
  console.log(err);
}

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5010, () => {
  console.log('\033[1;35m[ SERVIDOR ] \033[0;0m Servidor ligado.');
});
