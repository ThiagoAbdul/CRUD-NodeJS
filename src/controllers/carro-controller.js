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

const saveCar = async (req, res) => {
    const carro = req.body
    if(carroService.isCarroFilled(carro)){
        res.statusCode = 201
        await carroService.saveCar(carro)
        res.statusCode = 204
    }
    else{
        res.statusCode = 400
        res.json({error: 'Campos não enviados'})
    }
}

const updateById = async (req, res) => {
    const json = {error: '', result: {}}
    const id = req.params.id;
    const carro = req.body
    if(carroService.isCarroFilled(carro)){
        carro['id'] = id;
        try{
            await carroService.updateById(carro)
            json.result = carro
        }
        catch(error){
            res.statusCode = 400
            json.error = 'Erro na operação'
        }
    }
    else{
        res.statusCode = 400
        json.error = 'Campos não enviados'
    }
    res.json(json)
}

module.exports = { getAllCars, findCarById, saveCar, updateById }