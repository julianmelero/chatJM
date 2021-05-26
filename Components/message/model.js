const mongoose = require('mongoose');


const Schema = mongoose.Schema;


// Creamos esquemas

const mySchema = new Schema({
    user: [{
        // ObjectId es el identificador único. Al referenciarlo con User es como se hicieramos una FK.
        type: Schema.ObjectId,
        ref: 'User',
    }],
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