// // Creamos un mock (falsos datos)

const list = [];


const db = require('mongoose');
const model = require('./model');
// mongodb+srv://db_user_chatjm:<JavaScript>@cluster0.yjl6t.mongodb.net/<chatjm>?retryWrites=true&w=majority

db.Promise = global.Promise;
db.connect("mongodb+srv://db_user_chatjm:JavaScript@cluster0.yjl6t.mongodb.net/<chatjm>?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true });

console.log('[db] Conectada con éxito');

// Añadir info

 function addMessage(message) { 
     console.log(message);
    const myMessage = new model(message);    
    myMessage.save();
 };

 async function getMessage() {
    // return list;
    const messages = await model.find();
    return messages;

}

 module.exports = {
    add : addMessage,
    list : getMessage,
};
