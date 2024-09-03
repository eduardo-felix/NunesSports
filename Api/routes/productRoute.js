const express = require('express');
const { getProducts, addProducts, editProduct, deleteProduct } = require ('../controllers/products');

const router = express.Router();

router.get('/', getProducts);
router.post('/produtos', addProducts);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);


module.exports =  router
   