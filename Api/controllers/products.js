const { pool } = require('../server/db_conection');

const getProducts = async (req, res) => {
    try {
        const registeredProducts = await pool.query('SELECT * FROM produtos');
        if (!registeredProducts) {
        return console.log("Não existem produtos cadastrados");
        }     
    return res.status(200).json(registeredProducts)    
    } catch (error) {
        res.status(500).json({ mensagem: error.message }) 
    }  
}

module.exports = {
    getProducts
}