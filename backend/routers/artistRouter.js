const express = require('express');
const router = express.Router();
const Model = require('../models/artistModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
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


router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.error(err);
            res.state(500).json(err)
        });

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
    res.send('update response from artist router');
     {/* Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });  */}  
});

router.post("/authenticate", (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, name, role, email, avatar } = result;
                const payload = { _id, name, email };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2 days' },
                    (err, token) => {
                        if (err) {
                            res.status(400).json({ message: 'error creating token' })
                        } else {
                            res.status(200).json({
                                token, role, name, avatar
                            })

                        }
                    }
                )
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }


        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;