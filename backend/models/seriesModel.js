const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    name : String,
    cover : String,
    artist : {type: Types.ObjectId, ref : 'artist'},
    likes : String,
    comments : String,
    
});

module.exports = model('series', mySchema);