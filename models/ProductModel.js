const mongoose = require("mongoose");
const { Schema } = mongoose;


var productSchema = new Schema({
    prodID : {
        type : Number,
        required : true
    },
    prodName : {
        type : String,
        required : true
    },
    prodPrice : {
        type : Number,
        required : true
    },
    prodDesc : {
        type : String
    },
    prodCategory : {
        type : String,
        required : true
    },
    prodQty : {
        type : Number
    },
    bestSeller : {
        type : Boolean,
        required : true
    },
    prodPhoto : {
        type : String
    }
})
const ProductModel = mongoose.model('ProductTest', productSchema);

module.exports = ProductModel;