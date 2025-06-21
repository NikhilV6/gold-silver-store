const express = require('express');
const router = express.Router();
const {getProductsfun,
   getProductByIdfun } = require('../product.data');

router.get('/products', (req, res) => {
    // Simulate fetching products from a database
    const products = getProductsfun();
    
    
    res.status(200).json(products);
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;    
    const product = getProductByIdfun(productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
    }   
    res.status(200).json(product);
});

module.exports = router; 