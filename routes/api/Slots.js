const express = require("express");
const router = express.Router();

const validator = require("../../Validations/SlotsValidation");

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

router.put("/:id", function(req, res, next) {
  Slot.findByIdAndUpdate(req.params.id, req.body, function(err) {
    if (err) return next(err);
    res.json({ msg: "Admin updated successfully" });
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
