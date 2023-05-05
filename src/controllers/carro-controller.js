const carroService = require('../services/carro-service')


const getAllCars = async (_, res) => {
    const json = {error: '', result: []}
    const carros = await carroService.getAllCars();
    for (let i in carros){
        json.result.push({
            id: carros[i].id,
            marca: carros[i].marca,
            modelo: carros[i].modelo,
            placa: carros[i].placa
        });
    }
    res.json(json);
}

module.exports = { getAllCars }