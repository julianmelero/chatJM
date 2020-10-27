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
            date: new Date(2020,10,27),
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
    return new Promise( async (resolve,reject) => {        
        if(!id || !message) {
            reject('Invalid data');            
        }
        else{
             const result = await store.updateText(id,message);
             resolve(result);
        }
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
};