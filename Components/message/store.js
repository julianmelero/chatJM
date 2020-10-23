// // Creamos un mock (falsos datos)

// const list = [];

// function addMessage(message) {
//     list.push(message);
// }

// function getMessage() {
//     return list;
// }


// module.exports = {
//     add : addMessage,
//     list : getMessage,
// };


const db = require('mongoose');
// mongodb+srv://db_user_chatjm:<JavaScript>@cluster0.yjl6t.mongodb.net/<chatjm>?retryWrites=true&w=majority

db.Promise = global.Promise;
db.connect("mongodb+srv://db_user_chatjm:<JavaScript>@cluster0.yjl6t.mongodb.net/<chatjm>?retryWrites=true&w=majority", 
{useNewUrlParser: true });

console.log('[db] Conectada con éxito');