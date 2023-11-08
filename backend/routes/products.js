const express = require("express");
const router = express.Router();

const { getProducts, postProduct } = require("../controller/productController");

// GET all products
router.get("/category/:category", getProducts);

// POST new product
router.post("/", postProduct);

module.exports = router;
