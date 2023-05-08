const carroRepository = require('../repositories/carro-repository')


const getAllCars = () => {
    return carroRepository.getAllCars();    
}

const findCarById = (id) => {
    return carroRepository.findCarById(id)
}

const saveCar = (carro) => {
    return carroRepository.saveCar(carro)
}

const updateById = (carro) => {
    return carroRepository.updateById(carro)
}

const isCarroFilled = (carro) => carro.marca != undefined && carro.modelo != undefined && carro.placa != undefined
module.exports = { getAllCars, findCarById, saveCar, isCarroFilled, updateById };