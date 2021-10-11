const express = require('express');
const router = express.Router();

const productService = require("../services/ProductServices.js");


router.post("/add", productService.createAProduct);
router.get("/", productService.getProducts);
router.get("/category", productService.getAllCategories);
router.put("/:id", productService.updateAProduct);
router.delete("/:id", productService.deleteAProduct);

module.exports = router;