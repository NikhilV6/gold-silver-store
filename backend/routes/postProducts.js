const e = require('express');
const express = require('express');
const router = express.Router();
const { getProductsfun,
    addProductfun,
    deleteProductfun,
    getProductByIdfun } = require('../product.data');

router.post('/products', (req, res) => {
    const {name , price , image} = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const newProduct ={
        id: Date.now().toString(), // Simple ID generation
        name,
        price: parseFloat(price), // Ensure price is a number
        image
    }
    addProductfun(newProduct);
    res.status(201).json({ msg: 'Product added successfully'});


});


module.exports = router; // Handle the POST request to add a new product
    

