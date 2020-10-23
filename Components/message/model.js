const mongoose = require('mongoose');


const Schema = moongose.Schema;


// Creamos esquemas

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

// Model

const model = moongose.model('Message', mySchema);

module.exports = model;