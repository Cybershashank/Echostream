const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    mobileNumber : String,
    password : String,
    bio : String,
    avatar: {type : String, default: 'placeholder.png'},
    createdAt: {type : Date, default: Date.now},
    role: {type : String, default: 'user'},
});

module.exports = model('user', mySchema);