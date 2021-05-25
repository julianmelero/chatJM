const mongoose = require('mongoose');


const Schema = mongoose.Schema;


// Creamos esquemas

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
    message2: String,
});

// Model

const model = mongoose.model('Message', mySchema);

module.exports = model;