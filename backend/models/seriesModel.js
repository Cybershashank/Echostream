const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    name : String,
    cover : String,
    artist : {type: Types.ObjectId, ref : 'artist'},
    likes : {type : Number, default : 0},
    createdAt: { type: Date, default: Date.now }
    
});

module.exports = model('series', mySchema);