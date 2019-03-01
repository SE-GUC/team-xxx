const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../../models/Project');

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get('/', (req, res) => {
  Project.find()
    .sort({ name: 1 })
    .then(Projects => res.json(Projects));
});

// @route   POST api/Projects
// @desc    Create An Project
// @access  Public
router.post('/', (req, res) => {
  const newProject = new Project({
    Title: req.body.Title,
    description: req.body.description,
    candidates: req.body.candidates,
    effort: req.body.effort,
    time: req.body.time,
    commitment: req.body.commitment,
    experience: req.body.experience,
    compensation:req.body.compensation,
    partner:req.body.partner,
    skills:req.body.skills,
    consultancy:req.body.consultancy,
    category:req.body.category,
    state:req.body.state,
    applicants:req.body.applicants,
    assigned:req.body.assigned,
    extraInfo: req.body.extraInfo
  });

  newProject.save().then(Project => res.json(Project));
});

  

// @route   DELETE api/Projects/:id
// @desc    Delete A Project
// @access  Public
router.delete('/:id', (req, res) => {
  Project.findById(req.params.id)
    .then(Project => Project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;