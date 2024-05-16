const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Model = require('./model');
const cors = require('cors')

mongoose.connect("mongodb://localhost:27017/customer_orders").then(() => {
    console.log("connection established successfully");
    const app = express();

    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true })); 

    app.use(express.json());

    app.get('/getall', async (req, res) => {
        const result = await Model.find();
        res.json(result);
    });

    app.get('/getbyid/:id', async (req, res) => {
        const result = await Model.findOne({order_id : req.params.id});
        res.json(result);
    });

    app.post('/post', async (req, res) => {
        const { order_id, customer_name, product_id, quantity, total_price } = req.body;
        const model = new Model(); 
        model.order_id = order_id;
        model.customer_name = customer_name;
        model.product_id = product_id;
        model.quantity = quantity;
        model.total_price = total_price;
        const result = await model.save();
        res.json(result);
    });

    app.put('/put/:id', async (req, res) => {
        const result = await Model.findOne({ order_id: req.params.id });
        const { quantity, total_price } = req.body;
        result.quantity = quantity;
        result.total_price = total_price;
        result.save();
        res.json(result);
    });

    app.delete('/delete/:id', async (req, res) => {
        const result = await Model.deleteOne({ order_id: req.params.id });
        res.json(result);
    });

    app.listen(3003, () => {
        console.log("Server Started!!");
    });

});