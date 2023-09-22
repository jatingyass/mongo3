const mongoose = require("mongoose"); 
const Chat = require("./models/chat.js")

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
    from: "neha", 
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
    },
    {
        from: "rohit", 
        to: "priya",
        msg: "send me ",
       created_at: new Date(),
    },
    {
        from: "neha", 
        to: "sahil",
        msg: "sheets",
       created_at: new Date(),
    },
    {
        from: "Jatin gyass", 
        to: "shruti",
        msg: "give me thousands",
       created_at: new Date(),
    },
    {
        from: "tony", 
        to: "peter",
        msg: "kya haal h bhai tere",
       created_at: new Date(),
    },

];
Chat.insertMany(allChats);

