const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtKey = process.env.JWT_KEY;

    return jwt.sign({ _id }, jwtKey);
}


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json("All fields are required.")
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json("Invalid email.");
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json("Weak password.");
        }


        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json("There exists a user with the given email.")
        }

        user = new userModel({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = createToken(user._id);
        res.status(200).json({ _id: user.id, name, email, token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }

}

const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        let user = await userModel.findOne({ email });

        if(!user){
            return res.status(400).json("Invalid email or password.");
        }

        const isValidPassword = bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return res.status(400).json("Invalid password");
        }
        const token = createToken(user._id);
        res.status(200).json({ _id: user.id, name: user.name, email, token });        
    } catch(e){

    }
}


module.exports = { register, login };