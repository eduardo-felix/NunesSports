const { pool } = require('../server/db_conection');

const getProducts = async (req, res) => {
    try {
        const registeredProducts = await pool.query('SELECT * FROM produtos');
        if (!registeredProducts) {
        return console.log("Não existem produtos cadastrados");
        }     
    return res.status(200).json(registeredProducts.rows)    
    } catch (error) {
        res.status(500).json({ mensagem: error.message }) 
    }  
};

const addProducts = async (req, res) => {
    const { nome, descricao, preco, codigo } = req.body;  
    
    try {        
        const newProduct = await pool.query(
            'INSERT INTO produtos (nome, descricao, preco, codigo) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, descricao, preco, codigo]
          );            
    return res.status(200).json(newProduct.rows[0])        
    } catch (error) {
        res.status(500).js({ mensagem: error.message })
}
};

const editProduct = async (req, res) => {
    const { id } = req.params;
    const productToEdit = req.body
    try {            
        const productFound = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);

        if (productFound.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
          }
    const editedProduct = await pool.query(
  'UPDATE produtos SET nome = $1, descricao = $2, preco = $3, codigo = $4 WHERE id = $5 RETURNING *',
  [productToEdit.nome, productToEdit.descricao, productToEdit.preco, productToEdit.codigo, id]
);                
    return res.status(200).json(editedProduct.rows[0])            
    } catch (error) {
        res.status(500).json({ mensagem: error.message }) 
    }   
    };

const deleteProduct = async (req, res) => {
        const { id } = req.params;            
        try {            
            const productFound = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);

            if (productFound.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
            }

            await pool.query('DELETE FROM produtos WHERE id = $1', [id]);

            return res.status(204).send();            
        } catch (error) {
            res.status(500).json({ mensagem: error.message }) 
        }   
        };


module.exports = {
    getProducts,
    addProducts,
    editProduct,
    deleteProduct
}