const carroService = require('../services/carro-service')


const getAllCars = async (_, res) => {
    const json = {error: '', result: []}
    const carros = await carroService.getAllCars()
    for (let carro of carros){
        json.result.push({
            id: carro.id_carro,
            marca: carro.marca,
            modelo: carro.modelo,
            placa: carro.placa
        });
    }
    res.json(json);
}

const findCarById = async (req, res) => {
    const json = {error: '', result: {}}
    const id = req.params.id;
    const carro = (await carroService.findCarById(id))[0]
    if(carro){
        json.result = {
            id: carro.id_carro,
            marca: carro.marca,
            modelo: carro.modelo,
            placa: carro.placa
        };
    }
    else{
        json.error = 'Carro não encontrado'
        res.statusCode = 404;
    }
    res.json(json)
}

module.exports = { getAllCars, findCarById }