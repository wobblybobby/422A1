const productModel = require("../models/ProductModel.js");

exports.createAProduct = (req, res) => {
    const newProduct = new productModel(req.body);
    
    newProduct.save()
    .then((doc) => {
        res.json({
            message : "Product successfully registered",
            data : doc
        })
    })
    .catch((err) => {
        res.status(500).json({
            message : `Error ${err}`
        })
    })
};

/* exports.getAllProducts = (req, res) => {

}; */

exports.getAllCategories = (req, res) => {
    productModel.find()
        .then((product) => {
            if (product.length === 0) {
                res.status(404).json({
                    message : `There are no product categories`
                });
            }
            else {
                var categoryNames = [];

                for (i = 0; i < product.length; i++) {
                    var repeat = false;
                    if (categoryNames.length != 0) {
                        for (j = 0; j < categoryNames.length; j++) {
                            if (product[i].prodCategory == categoryNames[j]) {
                                repeat = true;
                            }
                        }
                        if (repeat == false) {
                            categoryNames.push(product[i].prodCategory);
                        }
                    }
                    else {
                        categoryNames.push(product[i].prodCategory);
                    }
                }

                res.json({
                    message : `Showing all product categories`,
                    data : categoryNames
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : `Error ${err}`
            })
        })
};

/* exports.getAllProductsInCategory = (req, res) => {

};

exports.getAllBestsellers = (req, res) => {

}; */

exports.getProducts = (req, res) => {
    if (req.query.id) {
        productModel.findOne()
        .where("prodID").equals(req.query.id)
        .then((product)=> {
            if (!product) {
                res.status(404).json({
                    message : `Product with ID: ${req.query.id} not found`
                });
            }
            else {
                res.json({
                    message : `Showing information for product id: ${req.query.id}`,
                    data : product
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message : `Error ${err}`
            })
        })
    }
    else if (req.query.bestseller) {
        productModel.find()
        .where("bestSeller").equals(req.query.bestseller==="yes" ? true : false)
        .then((product) => {
            if (product.length === 0) {
                res.status(404).json({
                    message : `There are no bestseller products`
                });
            }
            else {
                res.json({
                    message : `Showing bestseller products`,
                    data : product
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : `Error ${err}`
            })
        })
    }
    else if (req.query.category) {
        productModel.find()
        .where("prodCategory").equals(req.query.category)
        .then((product) => {
            if (product.length === 0) {
                res.status(404).json({
                    message : `There are no products in category ${req.query.category}`
                });
            }
            else {
                res.json({
                    message : `Showing all products in category ${req.query.category}`,
                    data : product
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : `Error ${err}`
            })
        })
    }
    else {
        productModel.find()
        .then((product) => {
            if (product.length === 0) {
                res.status(404).json({
                    message : `There are no products`
                });
            }
            else {
                res.json({
                    message : `Showing all products`,
                    data : product
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message : `Error ${err}`
            })
        })
    }
};

/* exports.getAProduct = (req, res) => {
    productModel.findOne()
    .where("prodID").equals(req.query.id)
    .then((product)=> {
        if (!product) {
            res.status(404).json({
                message : `Product with ID: ${req.query.id} not found`
            });
        }
        else {
            res.json({
                message : `Showing information for product id: ${req.query.id}`,
                data : product
            })
        }
    })
    .catch((err) => {
        res.status(500).json({
            message : `Error ${err}`
        })
    })
}; */

// exports.updateAProduct = (req, res) => {
//     productModel.findByIdAndUpdate(req.params.id, {
//         prodName : "habrush"
//         /* prodPrice : req.body.price,
//         prodDesc : req.body.desc,
//         prodCategory : req.body.category,
//         prodQty : req.body.quantity,
//         bestSeller : req.body.bestseller,
//         prodPhoto : req.body.photo */
//     }, {new : true})
//     .where("prodID").equals(req.params.id)
//     .then(product => {
//         console.log(product);
//     })
//     .catch((err) => {
//         res.status(500).json({
//             message : `Error ${err}`
//         })
//     })
// };

/* exports.updateAProduct = (req, res) => {
    productModel.findByIdAndUpdate(req.params.id, {
        prodName : req.body
    }, {new : true})
    .where("prodID").equals(req.params.id)
    .then((doc) => {
        res.json({
            message : "Product successfully updated",
            data : doc
        })
    })
    .catch((err) => {
        res.status(500).json({
            message : `Error ${err}`
        })
    })
}; */

/* exports.updateAProduct = (req, res) => {
    productModel.findByIdAndUpdate(
        { prodID : req.params.id },
        { prodName : req.body },
        { new : true },
        function (err, doc) {
        if (err) {
            res.status(500).json({
                message : `Error ${err}`
            })
        }
        else {
            res.status(404).json({
                message : `Product with ID: ${req.params.id} updated`,
                data : doc
            })
        }
    })
}; */

//Model.findByIdAndUpdate(id, updateObj, {new: true}, function(err, model)


exports.deleteAProduct = (req, res) => {
    productModel.findOneAndDelete()
        .where("prodID").equals(req.params.id)
        .then(()=> {
            res.status(404).json({
                message : `Product with ID: ${req.params.id} deleted`
            })
        })
        .catch((err) => {
            res.status(500).json({
                message : `Error ${err}`
            })
        })
};