const express = require('express');
const postRouter = require('./routers/postRouter');

const app = express();
const port = 5000;


app.use('/post', postRouter);

app.get('/',(req,res) =>{
    res.send('response from express');
});

app.get('/add',(req,res) =>{
    res.send('addmresponse from express');
});

app.listen(port,() =>{
    console.log('server started');
})


