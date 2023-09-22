const mongoose = require("mongoose");

// ab hum schema likh rehe h...
const chatSchema = new mongoose.Schema({
  from : {
    type : String,
    required: true,
  },
  to: {
    type : String,
    required: true,
  },
  msg: {
    type : String,
    maxLength: 50,
  },
  created_at: {
    type : Date,
    required: true,
  },
});

// ab hum model create krenge or humare model ka naam hone wala h chat toh by default humare collection ka naam chats save hoga
const Chat = mongoose.model("Chat", chatSchema);

// ab hum chat model ko export krege
module.exports = Chat;