const express = require("express");
const { createNewMessage, getAllMessages } = require("../controllers/message");
const router = express.Router();


router.post("/", createNewMessage);
router.get("/:chatId", getAllMessages);


module.exports = router;