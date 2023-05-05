const express = require('express');
const router = express.Router();

const carroController = require('./controllers/carro-controller')

router.get('/carros', carroController.getAllCars)

module.exports = router;