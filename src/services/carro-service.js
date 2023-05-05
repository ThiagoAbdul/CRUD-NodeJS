const carroRepository = require('../repositories/carro-repository')


const getAllCars = () => {
    return carroRepository.getAllCars();    
}

module.exports = { getAllCars };