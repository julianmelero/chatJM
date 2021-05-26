// // Creamos un mock (falsos datos)
const list = [];

const { Mongoose } = require("mongoose");
/*const db = require('mongoose');*/

const model = require("./model");

// Añadir info

function addMessage(message) {
  console.log(message);
  const myMessage = new model(message);
  myMessage.save();
}

// Ver info
async function getMessage(filterMessages) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterMessages !== null) {
      filter = { _user: filterMessages };
    }

    const messages = model
      .find(filter)
      // Queremos recoger toda la info del usuario. Populate busca dentro del elemento y lo popula (une)
      .populate("user")
      .exec((error, populated) => {                    
        if (error) {            
          reject(error);
          return false;
        }
        resolve(populated);
      });    
  });
}

async function updateText(id, message) {
  //const foundMessage =  await model.findOne({id:id});
  const foundMessage = await model.findById(id);

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

async function getUserMessage(user) {
  const message = await model.find({ _user: user });
  return message;
}

// Delete Message

async function deleteMessage(id) {
  return await model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  getUserMessage: getUserMessage,
  remove: deleteMessage,
};
