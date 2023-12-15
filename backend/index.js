const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.listen(PORT, (req, res) => {
    console.log(`Server Running on Port: ${PORT}`);
})

mongoose.connect(process.env.CONNECT_STR).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log("connection failed " + err.message)
})

module.exports = app;