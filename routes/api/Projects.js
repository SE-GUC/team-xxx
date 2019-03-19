const express = require("express");
const router = express.Router();



// Project Model
const Project = require("../../models/Project");

// @route   GET api/Projects
// @desc    Get All Projects
// @access  Public
router.get("/", (req, res) => {
  Project.find()
    .sort({ name: 1 })
    .then(Projects => res.json(Projects));
});

// @route   POST api/Projects
// @desc    Create An Project
// @access  Public
router.post("/", (req, res) => {
  const newProject = new Project({
    Title: req.body.Title,
    description: req.body.description,
    candidates: req.body.candidates,
    effort: req.body.effort,
    duration: req.body.duration,
    commitment: req.body.commitment,
    experience: req.body.experience,
    compensation: req.body.compensation,
    partner: req.body.partner,
    skills: req.body.skills,
    consultancy: req.body.consultancy,
    category: req.body.category,
    state: req.body.state,
    applicants: req.body.applicants,
    assigned: req.body.assigned,
    extraInfo: req.body.extraInfo,
    Consultant: req.body.Consultant,
    consultantRandom: req.body.consultantRandom,
    consultancyAcceptance: req.body.consultancyAcceptance,
    memberWork: req.body.memberWork
  });
  newProject.save().then(Project => res.json(Project));
});

// @route   DELETE api/Projects/:id
// @desc    Delete A Project
// @access  Public
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(Project => Project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//@ find a specific project by ID
router.get("/:id", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
});

//@ find project's description by the prjoect's ID
router.get("/:id/description", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.description);
    })
    .catch(err => next(err));
});
router.get("/:id/memberWork", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.memberWork);
    })
    .catch(err => next(err));
});

router.get("/:id/state", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.state);
    })
    .catch(err => next(err));
});

// toupdate the project attributes
router.put("/:id", function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function(err) {
    if (err) return next(err);
    res.json({ msg: "Admin updated successfully" });
  });
});

module.exports = router;
