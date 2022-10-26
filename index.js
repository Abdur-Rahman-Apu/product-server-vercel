const express = require('express')

const app = express();

const cors = require('cors');

app.use(cors());


const productCollection = require('./products.json');


const Port = process.env.Port || 5000;


app.get('/allProducts', (req, res) => {
    res.send(productCollection);
})



app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const getItem = productCollection?.find(p => p.id == id);
    res.send(getItem);
})



app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = productCollection?.filter(p => p.category === name);
    res.send(getCategory);
})

app.listen(Port, () => {
    console.log("server is running", Port);
})

module.exports = app;