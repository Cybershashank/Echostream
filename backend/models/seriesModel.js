const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    id: String,
    series : String,
    name : String,
    genre : String,
    category : String,
    language : String,
    discription : String,
    cover : String,
    image: String,
    icon: String,
    published: { type: Boolean, default: false },
    artist : {type: Types.ObjectId, ref : 'artist'},
    series: { type: Types.ObjectId, ref: 'series' },
    likes : {type : Number, default : 0},
    type : {type : String, default: 'trending'},
    type : {type : String, default: 'religion'},
    type : {type : String, default: 'romance'},
    type : {type : String, default: 'motivational'},
    type : {type : String, default: 'horror'},
    createdAt: { type: Date, default: Date.now }
    
});

module.exports = model('series', mySchema);