const { Schema, model } = require('../connection');

const mySchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
    message: String,
    createdAt: { type: Date, default: Date.now },

});

module.exports = model('contact', mySchema);