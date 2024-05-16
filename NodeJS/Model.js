const mongoose = require("mongoose");
const schema = mongoose.Schema({
    order_id:Number,
    customer_name:String,
    product_id:Number,
    quantity:Number,
    total_price: Number,
});
module.exports = mongoose.model("Order",schema);