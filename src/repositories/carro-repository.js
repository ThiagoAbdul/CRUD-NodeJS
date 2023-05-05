const db = require('../db');

const getAllCars = () => {
    return new Promise((resolve, reject) => {
        const queryCallback = (error, results) => {
            if(error){
                reject(error);
            }
            else{
                resolve(results);
            }
        }
        db.query('SELECT * FROM carro', queryCallback);
    });
}

module.exports = { getAllCars };