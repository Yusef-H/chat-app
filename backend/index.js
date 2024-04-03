const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const chatRouter = require("./routes/chat");
const messageRouter = require("./routes/message");

require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/chat", chatRouter);
app.use("/message", messageRouter);


app.listen(PORT, (req, res) => {
    console.log(`Server Running on Port: ${PORT}`);
})

mongoose.connect(process.env.CONNECT_STR).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log("connection failed " + err.message)
})

module.exports = app;