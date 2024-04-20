const express = require('express');
const router = express.Router();
const Model = require('../models/feedbackModel');
const jwt = require('../models/feedbackModel')
require('dotenv').config();

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
    res.send('add response from feedback router');
});

router.get('/getall', (req, res) => {
    res.send('getall response from feedback router');

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
    res.send('update response from feedback router');
});

router.post("/authenticate", (req, res) => {
    Model.find(req.body)
        .then((result) => {
            if (result) {
                const { _email, message } = result;
                const payload = { _email, message };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiry: '2 days' },
                    (err, token) => {
                        if (err) {
                            res.status(400).json({ message: 'error creating token' })
                        } else {
                            res.status(200).json({
                                token, role: reault.role
                            })

                        }
                    }
                )
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }


        }).catch((err) => {
            res.status(500).json(err);
        });
});


module.exports = router;