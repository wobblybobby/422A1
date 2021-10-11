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

//const HTTP_PORT = process.env.PORT || 8080;

const PORT = 8080;

app.listen(process.env.PORT,() => {
//app.listen(PORT,() => {
    console.log(`The REST API is up and running on PORT ${PORT}`);
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
    //mongoose.connect("mongodb+srv://dbUser422:dbUser422@cluster0.hsszo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(()=> {
        console.log(`Connected to MongoDB`)
    })
    .catch((err) => {
        console.log(`Error :${err}`);
    })
});