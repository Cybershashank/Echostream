const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
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

router.get("/getall", (req,res) => {
    Model.find({})
    .then((result) => {
        
        res.json(result)
    }
    ).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
})

router.get('/getbymail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(404).json({ message: 'User not found' });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    console.log(req.body);
});

router.get('/getuser', verifyToken, (req, res) => {
    res.status(200).json(req.user);
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

router.put('/update/:id',  (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err)
        });
});


router.post("/authenticate", (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                console.log(result);
                const { _id, name, email, role, avatar } = result;
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
                                token, role, avatar, name, email
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