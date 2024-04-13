const express = require('express');
const router = express.Router();
const Model = require('../models/podcastModel');


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save() 
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/add', (req, res) => {
    res.send('add response from podcast router'); 
});

router.get('/getall', (req, res) => {
    res.send('getall response from podcast router'); 
    
});

router.get('/delete', (req, res) => {
    res.send('delete response from podcast router'); 
});

router.get('/update', (req, res) => {
    res.send('update response from podcast router'); 
});

module.exports = router;