require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/products");
const cors = require("cors");

// express app
const app = express();

// cors
app.use(cors());

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/products", productRoutes);

app.listen("4000", () => {
  console.log("listening on port 4000");
});
