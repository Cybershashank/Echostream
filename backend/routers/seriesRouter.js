const express = require('express');
const router = express.Router();
const Model = require('../models/seriesModel');
 


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
    res.send('add response from series router'); 
});

router.get('/getall', (req, res) => {
    res.send('getall response from series router'); 
    
});

router.get('/delete', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err)
        }); 
});

router.get('/update', (req, res) => {
    res.send('update response from series router'); 
});

module.exports = router;