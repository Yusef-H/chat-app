const express = require("express");

const { register, findUser, login } = require("../controllers/user");
const router = express.Router();


router.post("/register", register);

router.get("/find/:id", findUser);
router.post("/login", login);


module.exports = router;