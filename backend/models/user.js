const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minLength: 2, maxLength: 40},
        email: {type: String, required: true, minLength: 2, maxLength: 40, unique: true},
        password: {type:String, required: true, minLength: 2, maxLength: 1000}
    },
    {
       timestamps: true
    }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;