const mongoose = require('mongoose');

const url ="mongodb+srv://shashanky485:Shashanky485@cluster0.jqcxcj5.mongodb.net/echostream?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected succussfully');
}).catch((err) => {
    console.log(err);
});

console.log('another line');