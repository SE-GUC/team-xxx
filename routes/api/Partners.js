const express = require('express');
const router = express.Router();

// Partner Model
const Partner = require('../../models/Partner');

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get('/', (req, res) => {
  Partner.find()
    .sort({ name: 1 })
    .then(Partners => res.json(Partners));
});

// @route   POST api/Partners
// @desc    Create An Partner
// @access  Public
router.post('/', (req, res) => {
  const newPartner = new Partner({
    business: req.body.business,
    partners: req.body.partners,
    boardmembers: req.body.boardmembers,
    events: req.body.events,
    field: req.body.field,
    projects: req.body.projects,
    feedback: req.body.feedback,
    Lifecoach:req.body.Lifecoach,
    membership:req.body.membership,
    Contracts:req.body.Contracts,
    Email:req.body.Email,
    Password:req.body.Password,
    Notifications:req.body.Notifications
  });

  newPartner.save().then(Partner => res.json(Partner));
});

// @route   DELETE api/Partners/:id
// @desc    Delete A Partner
// @access  Public
router.delete('/:id', (req, res) => {
  Partner.findById(req.params.id)
    .then(Partner => Partner.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;