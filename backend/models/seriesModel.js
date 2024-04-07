const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    cover : String,
    artist : String,
    likes : String,
    comments : String,
    
});

module.exports = model('user', mySchema);