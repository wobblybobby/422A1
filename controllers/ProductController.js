const express = require('express');
const router = express.Router();

const productService = require("../services/ProductServices.js");


router.post("/add", productService.createAProduct);
router.get("/", productService.getProducts);
//router.get("/", productService.getAllProducts);
router.get("/category", productService.getAllCategories);
//router.get("/category/:ctgy", productService.getAllProductsInCategory);
//router.get("/bestsellers", productService.getAllBestsellers);
//router.get("/:id", productService.getAProduct);
//router.put("/:id", productService.updateAProduct);
router.delete("/:id", productService.deleteAProduct);

module.exports = router;