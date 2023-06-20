const db = require('../db');

const getAllCars = async () => {
    return await db.query('SELECT * FROM carro')
}

const findCarById = async (id) => {
    return await db.query('SELECT * FROM carro WHERE id_carro = ?', [id])
}

const saveCar = async (carro) => {
    const params = [carro.marca, carro.modelo, carro.placa] 
    return await db.query('INSERT INTO carro values (default, ?, ?, ?)', params)
}

const updateById = async (carro) => {
    const params = [carro.marca, carro.modelo, carro.placa, carro.id] 
    return await db.query('UPDATE carro SET marca = ?, modelo = ?, placa = ? WHERE id_carro = ?', params)
}

const deleteById = async (id) => {
    return await db.query('DELETE FROM carro WHERE id_carro = ?', [id])
}

module.exports = { getAllCars, findCarById, saveCar, updateById, deleteById };

