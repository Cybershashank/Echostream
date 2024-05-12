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
    createdAt: { type: Date, default: Date.now }
    
});

module.exports = model('series', mySchema);