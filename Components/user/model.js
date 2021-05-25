const mongoose = require('mongoose');


const Schema = mongoose.Schema;


// Creamos esquemas

const mySchema = new Schema({
   name: String,
});

// Model

const model = mongoose.model('User', mySchema);

module.exports = model;