const customerModel = require("../models/CustomerModel.js");
const bcrypt = require('bcryptjs');

var currentId = -1;

exports.getACustomer = (req, res) => {
    customerModel.findOne()
    .where("custID").equals(req.query.id)
    .then((customer)=> {
        if (!customer) {
            res.status(404).json({
                message : `Customer with ID: ${req.query.id} not found`
            });
        }
        else {
            res.json({
                message : `Showing information for customer id: ${req.query.id}`,
                data : customer
            })
        }
    })
    .catch((err) => {
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};

exports.registerACustomer = (req, res) => {
    const newCustomer = new customerModel(req.body);

    bcrypt.genSalt(10)
                .then(salt=>bcrypt.hash(req.body.password,salt))
                .then(hash=> {
                    newCustomer.password = hash;
                    newCustomer.save()
                })
    .then((doc) => {
        res.json({
            message : "Customer successfully registered",
            data : doc
        })
    })
    .catch((err) => {
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};