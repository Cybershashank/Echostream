const express = require("express");
const router = express.Router();
const Model = require("../models/seriesModel");
const verifyToken = require("./verifyToken");

router.post("/add", verifyToken, (req, res) => {
  req.body.artist = req.user._id; //to get the id of the user who is adding the data
  //Storing data to MongoDb
  new Model(req.body).save() //to add the data in database
    .then((result) => {
      // console.log(result);
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get("/getall", (req, res) => {
  Model.find({}) //empty brackets will give all the data from the database
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id) //param is for parameter
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});


router.get("/getbycategory/:category", (req, res) => {
  console.log(req.params.category)
  Model.find({ pcategory: req.params.category })
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
});



router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result)

    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)

    });
})

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })             //new:true is for data update
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
})

module.exports = router;