const express = require('express');
const router = express.Router();

// Consultancy Model
const Consultancy = require('../../models/Consultancy');

// @route   GET api/Consultancys
// @desc    Get All Consultancys
// @access  Public
router.get('/', (req, res) => {
  Consultancy.find()
    .sort({ name: 1 })
    .then(Consultancys => res.json(Consultancys));
});

// @route   POST api/Consultancys
// @desc    Create An Consultancy
// @access  Public
router.post('/', (req, res) => {
  const newConsultancy = new Consultancy({
    business: req.body.business,
    partners: req.body.partners,
    boardmembers: req.body.boardmembers,
    events: req.body.events,
    reports: req.body.reports,
    Lifecoach:req.body.Lifecoach,
    membership:req.body.membership,
    Contracts:req.body.Contracts,
    Email:req.body.Email,
    Password:req.body.Password,
    Notifications:req.body.Notifications
  });

  newConsultancy.save().then(Consultancy => res.json(Consultancy));
});

// @route   DELETE api/Consultancys/:id
// @desc    Delete A Consultancy
// @access  Public
router.delete('/:id', (req, res) => {
  Consultancy.findById(req.params.id)
    .then(Consultancy => Consultancy.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;