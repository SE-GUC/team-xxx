const express = require('express');
const router = express.Router();

// Slot Model
const Slot = require('../../models/Slot');

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get('/', (req, res) => {
  Slot.find()
    .sort({ name: 1 })
    .then(Slots => res.json(Slots));
});

// @route   POST api/Slots
// @desc    Create An Slot
// @access  Public
router.post('/', (req, res) => {
  const newSlot = new Slot({
    lifecoach: req.body.lifecoach,
    number: req.body.number,
    Date: req.body.Date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    status: req.body.status,
    applicant: req.body.applicant,
    Location:req.body.Location,
  });

  newSlot.save().then(Slot => res.json(Slot));
});

// @route   DELETE api/Slots/:id
// @desc    Delete A Slot
// @access  Public
router.delete('/:id', (req, res) => {
  Slot.findById(req.params.id)
    .then(Slot => Slot.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});


router.get('/state/:id', function(req, res){
  Slot.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.status);
  })
  .catch(err => next(err));
});



router.get('/notified', (req, res) => {
  Slot.find({status: 'Free'})
    .sort({ number: 1 })
    .then(Date => res.json(Date)),
    (startTime => res.json(startTime)),
    (endTime => res.json(endTime))
    
    ;
});




module.exports = router;

