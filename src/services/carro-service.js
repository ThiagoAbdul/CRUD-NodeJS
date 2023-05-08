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

const deleteById = (id) => {
    return carroRepository.deleteById(id)
}

const isValidId = (id) => {
    id = Number(id)
    if(!Number.isNaN(id)) return id > 0;
    return false;
}

const isCarroFilled = (carro) => carro.marca != undefined && carro.modelo != undefined && carro.placa != undefined
module.exports = { getAllCars, findCarById, saveCar, isCarroFilled, updateById, deleteById, isValidId };