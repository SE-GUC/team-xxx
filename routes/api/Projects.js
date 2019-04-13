const express = require("express");
const router = express.Router();
const Joi = require("joi");
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
router.get("/:id", function(req, res, next) {
  Project.findById(req.params.id, function(err, Project) {
    if (err) return next(err);
    res.json(Project);
  });
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

/* UPDATE PROJECT */
router.put("/:id", function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
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

router.put("/assign/:id", function(req, res, next) {
  try {
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      assigned: req.body.assigned
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});
router.put("/updateCatAndInfo/:id", async function(req, res, next) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project)
      return res.status(404).send({ error: "Project does not exist" });
    const isValidated = validator.categoryInfoValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      category: req.body.category,
      extraInfo: req.body.extraInfo
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/chooseConsultant/:id", async function(req, res, next) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project)
      return res.status(404).send({ error: "Project does not exist" });
    const isValidated = validator.chooseConsultantValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      consultancy: req.body.consultancy
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});
router.put("/declineproject/:id", function(req, res, next) {
  try {
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      state: req.body.state
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});
//provide detailed description
router.put("/descc/:id", function(req, res, next) {
  try {
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      detaileddescription: req.body.detaileddescription
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});
//provide detailed Plan
router.put("/plandet/:id", function(req, res, next) {
  try {
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      detailedplan: req.body.detailedplan
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
}); //provide detailed description
router.put("/descc/:id", function(req, res, next) {
  try {
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      detaileddescription: req.body.detaileddescription
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});
//provide detailed Plan
router.put("/plandet/:id", function(req, res, next) {
  try {
    const updateSchema = {
      Title: Project.findById(req.params.id).Title,
      description: Project.findById(req.params.id).description,
      detailedplan: req.body.detailedplan
    };
    Project.findByIdAndUpdate(req.params.id, updateSchema, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/candidates/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      candidates: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.candidates;
    Project.findByIdAndUpdate(req.params.id, {
      $push: { candidates: bus }
    }).exec();
    return res.json({ msg: "candidates added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add candidates` });
  }
});

router.post("/skills/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      skills: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.skills;
    Project.findByIdAndUpdate(req.params.id, { $push: { skills: bus } }).exec();
    return res.json({ msg: "skills added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add skills` });
  }
});

router.post("/applicants/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      applicants: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.applicants;
    Project.findByIdAndUpdate(req.params.id, {
      $push: { applicants: bus }
    }).exec();
    return res.json({ msg: "applicants added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add applicants` });
  }
});

router.post("/search/:query", (req, res) => {
  Project.find(
    { $text: { $search: req.params.query } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .then(Projects => res.json(Projects));
});

module.exports = router;
