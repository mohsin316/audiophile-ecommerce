const express = require("express");
const router = express.Router();

const { getProducts, postProduct } = require("../controller/productController");
const { verifyJWT } = require("../middleware/verifyJWT");

// GET all products
router.get("/category/:category", getProducts);

router.route("/testing").get(verifyJWT, (req, res) => {
  const { data } = req.body;
  res.json({ 0: data });
  // res.json({ message: "you are authorized" });
});

// POST new product
router.post("/", postProduct);

module.exports = router;
