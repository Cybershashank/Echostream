const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    mobileNumber : String,
    password : String,
    
    avatar: {type : String, default: 'placeholder.png'},
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('user', mySchema);