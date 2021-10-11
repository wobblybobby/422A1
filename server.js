const express = require("express");
const mongoose = require("mongoose");

const customerController = require("./controllers/CustomerController.js");
const productController = require("./controllers/ProductController.js");


if (process.env.NODE_ENV!="production") {
    require('dotenv').config({ path: 'config/keys.env' });
}

const app = express();
app.use(express.json());
app.use("/customer", customerController);
app.use("/product", productController);

app.listen(process.env.PORT,() => {
    console.log(`The REST API is up and running on PORT ${process.env.PORT}`);
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(()=> {
        console.log(`Connected to MongoDB`)
    })
    .catch((err) => {
        console.log(`Error :${err}`);
    })
});