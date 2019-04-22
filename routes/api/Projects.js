const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("../../validations/ProjectValidation");
const auth = require("../../middleware/auth");
const mongoose = require("mongoose").set("debug", true);
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const config = require("config");
const path = require("path");
const db = config.get("mongoURI");
// Project Model
const Project = require("../../models/Project");

var conn = mongoose.connection;
Grid.mongo = mongoose.mongo;

let gfs;
conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

// @route   GET api/Projects
// @desc    Get All Projects
// @access  Public
router.get("/", auth, (req, res) => {
  Project.find()
    .sort({ name: 1 })
    .then(Projects => res.json(Projects));
});

// @route   POST api/Projects
// @desc    Create An Project
// @access  Public
router.post("/", auth, upload.single("detailplan"), async (req, res) => {
  console.log(req.file);
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newProject = await Project.create({
      Title: req.body.Title,
      description: req.body.description,
      candidates: req.body.candidates,
      effort: req.body.effort,
      duration: req.body.duration,
      commitment: req.body.commitment,
      experience: req.body.experience,
      compensation: req.body.compensation,
      partner: req.body.partner,
      Consultant: req.body.Consultant,
      consultancy: req.body.consultancy,
      consultantRandom: req.body.consultantRandom,
      consultancyAcceptance: req.body.consultancyAcceptance,
      skills: req.body.skills,
      category: req.body.category,
      state: req.body.state,
      applicants: req.body.applicants,
      assigned: req.body.assigned,
      extraInfo: req.body.extraInfo,
      memberWork: req.body.memberWork,
      OrientaionForTheTask: req.body.OrientaionForTheTask
      // detailedplan: req.file.filename
    });
    res.json({ msg: "Project was created successfully", data: newProject });
  } catch (error) {
    console.log(error);
  }
});
// @route   DELETE api/Projects/:id
// @desc    Delete A Project
// @access  Public
router.delete("/:id", auth, (req, res) => {
  Project.findById(req.params.id)
    .then(Project => Project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//@ find a specific project by ID
router.get("/:id", auth, function(req, res, next) {
  Project.findById(req.params.id, function(err, Project) {
    if (err) return next(err);
    res.json(Project);
  });
});

//@ find project's description by the prjoect's ID
router.get("/:id/description", auth, function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.description);
    })
    .catch(err => next(err));
});
router.get("/:id/memberWork", auth, function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.memberWork);
    })
    .catch(err => next(err));
});

router.get("/:id/state", auth, function(req, res) {
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
router.put("/:id", auth, function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get("/:id/OrientaionForTheTask", auth, function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.OrientaionForTheTask);
    })
    .catch(err => next(err));
});
router.get("/:id/category", auth, function(req, res) {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.category);
    })
    .catch(err => next(err));
});

router.get("/:id/skill", auth, function(req, res) {
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
router.get("/projects//", auth, (req, res) => {
  Project.find({ assigned: "assigned2" }).then(Projects => res.json(Projects));
});

router.put("/assign/:id", auth, function(req, res, next) {
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
router.put("/updateCatAndInfo/:id", auth, async function(req, res, next) {
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

router.put("/chooseConsultant/:id", auth, async function(req, res, next) {
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
router.put("/declineproject/:id", auth, function(req, res, next) {
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
router.put("/descc/:id", auth, function(req, res, next) {
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
router.put("/plandet/:id", auth, function(req, res, next) {
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
router.put("/descc/:id", auth, function(req, res, next) {
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
router.put("/plandet/:id", auth, function(req, res, next) {
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

router.post("/candidates/:id", auth, async (req, res) => {
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

router.post("/skills/:id", auth, async (req, res) => {
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

router.post("/applicants/:id", auth, async (req, res) => {
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

router.post("/search/:query", auth, (req, res) => {
  Project.find(
    { $text: { $search: req.params.query } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .then(Projects => res.json(Projects));
});

router.get("/fileinfo/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      const name = doc.detailedplan;
      gfs.files.findOne({ filename: name }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
          return res.status(404).json({
            err: "No file exists"
          });
        }
        // File exists
        return res.json(file);
      });
    })
    .catch(err => next(err));
});

// @route GET /file/:filename
// @desc Display File
router.get("/file/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      const name = doc.detailedplan;
      gfs.files.findOne({ filename: name }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
          return res.status(404).json({
            err: "No file exists"
          });
        }
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      });
    })
    .catch(err => next(err));
});

module.exports = router;
