const db = require('mongoose');
db.Promise = global.Promise;

async function connect(url) {    
    await db.connect(url, 
        {useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connect;



