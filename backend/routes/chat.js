const express = require("express");

const { createChat, getUserChats, getChat } = require("../controllers/chat");
const router = express.Router();


router.post("/", createChat);
router.get("/:id", getUserChats);
router.get("/get/:firstId/:secondId", getChat);


module.exports = router;