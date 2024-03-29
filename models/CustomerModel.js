const mongoose = require("mongoose");
const { Schema } = mongoose;

var customerSchema = new Schema({
    custID : {
        type : Number
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNum : [{
        type : String
    }]
})
const CustomerModel = mongoose.model('Customer', customerSchema);

module.exports = CustomerModel;