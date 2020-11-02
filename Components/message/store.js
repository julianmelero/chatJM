// // Creamos un mock (falsos datos)
let val = require('../../keys');
const list = [];


const db = require('mongoose');
const model = require('./model');
// mongodb+srv://db_user_chatjm:<JavaScript>@cluster0.yjl6t.mongodb.net/<chatjm>?retryWrites=true&w=majority

db.Promise = global.Promise;
console.log(val.USER);
db.connect("mongodb+srv://db_user_chatjm:JavaScript@cluster0.yjl6t.mongodb.net/<chatjm>?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true })

console.log('[db]Conectado con éxito');



// Añadir info

 function addMessage(message) { 
     console.log(message);
    const myMessage = new model(message);    
    myMessage.save();
 };

 // Ver info
 async function getMessage(filterMessages) {
    let filter = {};
    if (filterMessages !== null) {
        filter = {user: filterMessages};
    }
    
    const messages = await model.find(filter);
    return messages;

}

async function updateText(id,message) {
    
    //const foundMessage =  await model.findOne({id:id});        
    const foundMessage =  await model.findById(id)  ;
    
    foundMessage.message = message;    
    
    
    const newMessage =  await foundMessage.save();
    return newMessage;

}

async function getUserMessage(user) {
    console.log("Entro");    
    const message = await model.find( { user: user});
    return message;
}


// Delete Message

function deleteMessage(id){
    return model.deleteOne({
        id:id
    });
}
 module.exports = {
    add : addMessage,
    list : getMessage,
    updateText : updateText,
    getUserMessage: getUserMessage,
    remove: deleteMessage,
};
