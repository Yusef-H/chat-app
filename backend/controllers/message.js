const messageModel = require("../models/message");


const createNewMessage = async (req, res) => {
    const {chatId, senderId, message} = req.body;

    const newMessage = new messageModel({chatId, senderId, message});

    try{
        const response = await newMessage.save();
        res.status(200).json(response);
    }
    catch(e){
        console.log(e);
        res.status(500).json(e);
    }
}

const getAllMessages = async (req, res) => {
    const {chatId} = req.params;

    try{
        const messages = await messageModel.find({chatId});
        res.status(200).json(messages);
    }
    catch(e){
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports = {createNewMessage, getAllMessages};