const express = require("express");
const router = express.Router();

const validator = require("../../validations/ProjectValidation");

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
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newProject = await Project.create(req.body);
    res.json({ msg: "Project was created successfully", data: newProject });
  } catch (error) {
    console.log(error);
  }
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
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project)
      return res.status(404).send({ error: "project does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    Project.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return next(err);
      res.json({ msg: "Project updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id/OrientaionForTheTask", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.OrientaionForTheTask);
    })
    .catch(err => next(err));
});
router.get("/:id/category", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.category);
    })
    .catch(err => next(err));
});

router.get("/:id/skill", function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.skills);
    })
    .catch(err => next(err));
});
//get projects of the logged in member
router.get("/projects//", (req, res) => {
  Project.find({ assigned: "assigned2" }).then(Projects => res.json(Projects));
});
module.exports = router;
