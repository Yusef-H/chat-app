const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        participants: Array,
    },
    {
        timestamps: true,
    }
);

const chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel;