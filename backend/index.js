const express = require('express');
const getProducts = require('./routes/getProducts');
const deleteProducts = require('./routes/deleteProducts');  
const postProducts = require('./routes/postProducts');
const app = express();
const PORT = 8000;
        
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

       
app.use(express.json()); // Middleware to parse JSON bodies
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use('/api', getProducts);
app.use('/api', deleteProducts);        
app.use('/api', postProducts); 



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});