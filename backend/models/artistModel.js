const { Schema, model } = require('../connection');

const mySchema = new Schema({
    user: String,
    cover: String,
    avatar: String,
    gender: String,
    bio: String,
    type: String,
    create: String,

});

module.exports = model('artist', mySchema);