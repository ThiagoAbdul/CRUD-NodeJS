require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json())
server.use('/api', routes)

const port = process.env.PORT

server.listen(port, () => console.log(`Server running at http://localhost:${port}`))
