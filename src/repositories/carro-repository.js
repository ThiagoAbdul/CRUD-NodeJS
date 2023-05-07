const db = require('../db');

const getAllCars = () => {
    return _query('SELECT * FROM carro')
}

const _query = (sqlCommand, params=null) => {
    return new Promise((resolve, reject) => {
        const queryCallback = (error, results) => {
            if(error){
                reject(error);
            }
            else{
                resolve(results);
            }
        }
        if(params){
            db.query(sqlCommand, params, queryCallback);    
        }
        else{
            db.query(sqlCommand, queryCallback);
        }
    });
}

const findCarById = (id) => {
    return _query('SELECT * FROM carro WHERE id_carro = ?', [id])
}

module.exports = { getAllCars, findCarById };

