const chatModel = require("../models/chat");

const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        const chatExists = await chatModel.findOne({
            participants: { $all: [firstId, secondId] }
        })
        if (chatExists) {
            return res.status(200).json(chatExists);
        }

        const newChat = new chatModel({
            participants: [firstId, secondId]
        })

        const saveResponse = await newChat.save();

        res.status(200).json(saveResponse);
    }
    catch (e) {
        console.log(e);
        res.status(500).json(error);
    }
}

const getUserChats = async (req, res) => {
    const id = req.params.userId;

    try {
        const userChats = chatModel.find({
            participants: { $in: [id] }
        });

        res.status(200).json(userChats);
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

const getChat = async (req, res) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = chatModel.findOne({
            participants: { $all: [firstId, secondId] }
        });

        res.status(200).json(chat);
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports = { createChat, getUserChats, getChat };