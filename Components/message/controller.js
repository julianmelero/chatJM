const store = require('./store');



function addMessage(user, message , message2) {    
    return new Promise ((resolve, reject) => {
        if(!user || !message) {            
            console.error('[messageController] No hay usuario o mensaje');
            reject('Datos incorrectos');            
        }
        else {        
        const fullMessage = {
            user : user,
            message: message,
            date: new Date,
            message2: message2,
        };
        
        store.add(fullMessage);

        resolve(fullMessage);
    }
    });
   
}

function getMessages(filterMessages) {
    return new Promise( (resolve,reject) => {
        resolve(store.list(filterMessages));
    });
}

function getUserMessage(user) {    
    return new Promise( (resolve,reject) => {
        if(!user) {
            reject('Invalid data'); 
            return false;           
        }
        resolve(store.getUserMessage(user));
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

async function deleteMessage(id) {
    return new Promise ( (resolve,reject) => {
        if(!id) {
            reject('ID inválido');
            return false;
        }
        store.remove(id)
        .then( () => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })

    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    getUserMessage,
    deleteMessage,
};