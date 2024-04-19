const express = require('express');
const artistRouter = require('./routers/artistRouter');
const podcastRouter = require('./routers/podcastRouter');
const seriesRouter = require('./routers/seriesRouter');
const userRouter = require('./routers/userRouter');
const cors = require('cors');
const utilRouter = require('./routers/Utils')

const app = express();
const port = 5000;

app.use(cors({origin: 'http://localhost:3000'}));


app.use('/artist', artistRouter);
app.use('/podcast', podcastRouter);
app.use('/series', seriesRouter);
app.use('/user', userRouter);
app.use('/util', utilRouter)

app.use(express.static('./uploads'));

app.get('/',(req,res) =>{
    res.send('response from express');
});

app.get('/add',(req,res) =>{
    res.send('addmresponse from express');
});

app.listen(port,() =>{
    console.log('server started');
})


