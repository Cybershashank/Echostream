const { Schema, model } = require('../connection');

const mySchema = new Schema({
    user: String,
    cover: String,
    avatar: {type : String, default: 'placeholder.png'},
    gender: String,
    bio: String,
    type: String,
    createdAt: {type : Date, default: Date.now},

});

module.exports = model('artist', mySchema);