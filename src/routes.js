const express = require('express');
const router = express.Router();

const carroController = require('./controllers/carro-controller')

router.get('/carros', carroController.getAllCars)
router.get('/carros/:id', carroController.findCarById)
router.post('/carros', carroController.saveCar)
router.put('/carros/:id', carroController.updateById)

module.exports = router;