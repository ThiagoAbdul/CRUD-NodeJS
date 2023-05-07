const carroRepository = require('../repositories/carro-repository')


const getAllCars = () => {
    return carroRepository.getAllCars();    
}

const findCarById = (id) => {
    return carroRepository.findCarById(id)
}

module.exports = { getAllCars, findCarById };