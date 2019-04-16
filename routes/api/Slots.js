const express = require("express");
const router = express.Router();

const validator = require("../../validations/SlotsValidation");

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

router.get("/lifecoachEmail/:id", function(req, res) {
  Slot.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.lifecoachEmail);
    })
    .catch(err => next(err));
});

/* GET SINGLE Slot BY ID */
router.get("/:id", function(req, res, next) {
  Slot.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Slot */
router.put("/:id", function(req, res, next) {
  Slot.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Slot */
router.post("/", function(req, res, next) {
  Slot.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route   DELETE api/Slots/:id
// @desc    Delete A Slot
// @access  Public
router.delete("/:id", (req, res) => {
  Slot.findById(req.params.id)
    .then(Slot => Slot.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//get free slots
router.get("/status//", (req, res) => {
  Slot.find({ status: "Free" }).then(Slots => res.json(Slots));
});

//bookslots
router.put("/book/:id", async function(req, res, next) {
  try {
    const slot = await Slot.findById(req.params.id);
    if (!slot) return res.status(404).send({ error: "Slot does not exist" });
    const isValidated = validator.bookValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updateSchema = {
      status: "Booked",
      Location: req.body.Location,
      applicant: req.body.applicant
    };
    Slot.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/confim/:id", async function(req, res, next) {
  try {
    const slot = await Slot.findById(req.params.id);
    if (!slot) return res.status(404).send({ error: "Slot does not exist" });
    const isValidated = validator.bookValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updateSchema = {
      BookingCon: true
    };
    Slot.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/Date/:id", function(req, res) {
  Slot.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Date);
    })
    .catch(err => next(err));
});
router.get("/Location/:id", function(req, res) {
  Slot.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Location);
    })
    .catch(err => next(err));
});
module.exports = router;
