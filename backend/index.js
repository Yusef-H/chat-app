const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.listen(PORT, (req, res) => {
    console.log(`Server Running on Port: ${PORT}`);
})

module.exports = app;