const express = require('express');
const router = express.Router();

const customerService = require("../services/CustomerServices.js");

router.post("/register", customerService.registerACustomer);
router.get("/", customerService.getACustomer);

module.exports = router;