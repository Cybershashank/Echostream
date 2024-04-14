const { Schema, model } = require('../connection');

const mySchema = new Schema({

    name : String,
    email : String,
    password : String,
    user: String,
    cover: String,
    gender: String,
    bio: String,
    type: String,
    avatar: {type : String, default: 'placeholder.png'},
    createdAt: {type : Date, default: Date.now},

});

module.exports = model('artist', mySchema);