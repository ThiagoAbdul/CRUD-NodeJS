const carroRepository = require('../repositories/carro-repository')


const getAllCars = async () => {
    const [cars] = await carroRepository.getAllCars();
    return cars    
}

const findCarById = async (id) => {
    const [car] = await carroRepository.findCarById(id)
    return car

}

const saveCar = async (carro) => {
    const [resultSet] = await carroRepository.saveCar(carro)
    const savedCarId = resultSet.insertId;
    return await findCarById(savedCarId)
}

const updateById = async (carro) => {
    return await carroRepository.updateById(carro)
    
}

const deleteById = async (id) => {
    return await carroRepository.deleteById(id)
}

const isValidId = (id) => {
    id = Number(id)
    if(!Number.isNaN(id)) return id > 0;
    return false;
}

const isCarroFilled = (carro) => carro.marca != undefined && carro.modelo != undefined && carro.placa != undefined
module.exports = { getAllCars, findCarById, saveCar, isCarroFilled, updateById, deleteById, isValidId };