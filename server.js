const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customerController = require("./controllers/CustomerController.js");
const productController = require("./controllers/ProductController.js");


if (process.env.NODE_ENV!="production") {
    require('dotenv').config({ path: 'config/keys.env' });
}

const app = express();

//
const corsOptionsDelegate = function (req, callback) {
    const allowlist = [`http://localhost:3000`, 'http://127.0.0.1:3000']
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin : true }
    } else {
        corsOptions = { origin : false }
    }
    callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate))
//

app.use(express.json());
app.use("/customer", customerController);
app.use("/product", productController);

//Home endpoint
app.get("/", (req, res) => {
    res.json({
        message : "Please add /customer or /product to the end of the URL"
    })
})

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