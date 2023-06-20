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
    const [carro] = await carroService.findCarById(id)
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
    const json = {error: '', result: {}}
    const carro = req.body
    if(carroService.isCarroFilled(carro)){
        res.statusCode = 201
        const [carroSalvo] = await carroService.saveCar(carro)
        json.result = {
            id: carroSalvo.id_carro,
            marca: carroSalvo.marca,
            modelo: carroSalvo.modelo,
            placa: carroSalvo.placa
        };
    }
    else{
        res.statusCode = 400
        json.error = 'Campos não enviados'
    }
    res.json(json)
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

const deleteById = async (req, res) => {
    const json = {error: ''}
    const id = req.params.id;
    if(carroService.isValidId(id)){
        try{
            await carroService.deleteById(id)
            res.statusCode = 204
        }
        catch(error){
            json.error = 'Erro na operação'
            res.statusCode = 400   
        }
    }
    else{
        json.error = 'Id inválido'
        res.statusCode = 400
    }
    res.json(json)
    
}

module.exports = { getAllCars, findCarById, saveCar, updateById, deleteById }