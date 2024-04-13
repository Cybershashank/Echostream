const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    series: {type: Types.ObjectId, ref : 'series'},
    artist: {type: Types.ObjectId, ref : 'artist'},
    title: String,
    genre: String,
    category: String,
    language: String,
    type: String,
    discription: String,
    icon: String,
    createdAt: {type : Date, default: Date.now},
    likes: String,

});

module.exports = model('podcast', mySchema);