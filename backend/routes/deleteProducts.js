const express = require('express');
const router = express.Router();
const {
    deleteProductfun,
    getProductByIdfun} = require('../product.data');

router.delete('/products/:id', (req,res)=>{
    const productId = req.params.id;
    
        const product = getProductByIdfun(productId);
        if(!product){
            return res.statusMessage(404).json({err:"Product not found."});
        }
    
    deleteProductfun(productId);
    res.status(200).json({
        message: `Product with ID ${productId} has been deleted successfully.`
    });
});

module.exports = router; 