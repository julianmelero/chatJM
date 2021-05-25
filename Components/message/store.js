// // Creamos un mock (falsos datos)
const list = [];


const { Mongoose } = require('mongoose');
/*const db = require('mongoose');*/

const db = require('../../db');
const keys = require('../../keys');
db("mongodb+srv://" + USER + ":" + PASS + "@" + CLUSTER + "/<" + BD +">?retryWrites=true&w=majority");

const model = require('./model');
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
        filter = {_user: filterMessages};
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
    const message = await model.find( { _user: user});
    return message;
}


// Delete Message

async function deleteMessage(id){
    return await model.deleteOne({
        _id:id
    });
}



 module.exports = {
    add : addMessage,
    list : getMessage,
    updateText : updateText,
    getUserMessage: getUserMessage,
    remove: deleteMessage,
};
