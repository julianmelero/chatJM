const store = require('./store');



function addMessage(user, message) {    
    return new Promise ((resolve, reject) => {
        if(!user || !message) {            
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Datos incorrectos');            
        }
        else {        
        const fullMessage = {
            user : user,
            message: message,
            date: new Date,
        };
        
        store.add(fullMessage);

        resolve(fullMessage);
    }
    });
   
}

function getMessages() {
    return new Promise( (resolve,reject) => {
        resolve(store.list());
    });
}


async function updateMessage(id,message) {
    return new Promise(  (resolve,reject) => {        
        if(!id || !message) {
            reject('Invalid data'); 
            return false;           
        }
        const result =  store.updateText(id,message);
        resolve(result);
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
};