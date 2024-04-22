const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    podcast: {type: Types.ObjectId, ref : 'podcast'},
    user: {type: Types.ObjectId, ref : 'user'},
    text: String,
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('comment', mySchema);