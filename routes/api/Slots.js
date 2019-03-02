const express = require("express");
const router = express.Router();

// Slot Model
const Slot = require("../../models/Slot");

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get("/", (req, res) => {
  Slot.find()
    .sort({ name: 1 })
    .then(Slots => res.json(Slots));
});
router.get("/state/:id", function(req, res) {
  Slot.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.status);
    })
    .catch(err => next(err));
});

router.get("/:id", function(req, res) {
  Slot.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
});

router.put("/update/:id", function(req, res) {
  var id = req.params.id;
  Slot.findOne({ _id: id }, function(err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        if (req.body.lifecoachEmail) {
          foundObject.lifecoachEmail = req.body.lifecoachEmail;
        }
        if (req.body.number) {
          foundObject.number = req.body.number;
        }
        if (req.body.Date) {
          foundObject.Date = req.body.Date;
        }
        if (req.body.startTime) {
          foundObject.startTime = req.body.startTime;
        }
        if (req.body.endTime) {
          foundObject.endTime = req.body.endTime;
        }
        if (req.body.status) {
          foundObject.status = req.body.status;
        }
        if (req.body.applicant) {
          foundObject.applicant = req.body.applicant;
        }
        if (req.body.Location) {
          foundObject.Location = req.body.Location;
        }
        foundObject.save(function(err, updatedObject) {
          if (err) {
            console.log(err);
          } else {
            res.send(updatedObject);
          }
        });
      }
    }
  });
});

// @route   POST api/Slots
// @desc    Create An Slot
// @access  Public
router.post("/", (req, res) => {
  const newSlot = new Slot({
    lifecoachEmail: req.body.lifecoachEmail,
    number: req.body.number,
    Date: req.body.Date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    status: req.body.status,
    applicant: req.body.applicant,
    Location: req.body.Location
  });

  newSlot.save().then(Slot => res.json(Slot));
});

// @route   DELETE api/Slots/:id
// @desc    Delete A Slot
// @access  Public
router.delete("/:id", (req, res) => {
  Slot.findById(req.params.id)
    .then(Slot => Slot.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;
