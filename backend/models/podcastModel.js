const { Schema, model } = require('../connection');

const mySchema = new Schema({
    series: String,
    artist: String,
    title: String,
    type: String,
    discription: String,
    icon: String,
    createdAt: {type : Date, default: Date.now},
    likes: String,

});

module.exports = model('podcast', mySchema);