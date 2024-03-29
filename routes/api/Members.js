const express = require("express");
const router = express.Router();
const validator = require("../../validations/MembersValidation");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
// Member Model
const Member = require("../../models/Member");

router.get("/events/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.events);
    })
    .catch(err => next(err));
});

router.get("/RecommendedTasks/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.RecommendedTasks);
    })
    .catch(err => next(err));
});

router.get("/projects/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.projects);
    })
    .catch(err => next(err));
});

router.get("/Reviews/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.reviews);
    })
    .catch(err => next(err));
});

router.get("/ReviewOwner/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.ReviewOwner);
    })
    .catch(err => next(err));
});

router.get("/Notifications/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Notifications);
    })
    .catch(err => next(err));
});

router.get("/Email/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Email);
    })
    .catch(err => next(err));
});

router.get("/interests/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.interests);
    })
    .catch(err => next(err));
});

router.get("/tasks/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.tasks);
    })
    .catch(err => next(err));
});
router.get("/membership/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.membership);
    })
    .catch(err => next(err));
});

router.get("/Contracts/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Contracts);
    })
    .catch(err => next(err));
});

router.get("/lifecoach/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Lifecoach);
    })
    .catch(err => next(err));
});

router.get("/skills/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.skills);
    })
    .catch(err => next(err));
});
// @route   GET api/Members
// @desc    Get All Members
// @access  Public
router.get("/", (req, res) => {
  Member.find()
    .sort({ name: 1 })
    .then(Members => res.json(Members));
});

//@ find a specific Member by ID
router.get("/:id", function(req, res) {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
});

// @route   DELETE api/Members/:id
// @desc    Delete A Member
// @access  Public
router.delete("/:id", (req, res) => {
  Member.findById(req.params.id)
    .then(Member => Member.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false })); //console.log("")
});
router.get("/masterclasses/:id", (req, res) => {
  Member.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.masterclasses);
    })
    .catch(err => next(err));
});

router.put("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member)
      return res.status(404).send({ error: "Member does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    Member.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return next(err);
      res.json({ msg: "Member updated successfully" });
    });
  } catch (error) {
    console.log(error);
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
    Member.findByIdAndUpdate(req.params.id, { $push: { skills: bus } }).exec();
    return res.json({ msg: "skills added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add skills` });
  }
});

router.post("/interests/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      interests: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.interests;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { interests: bus }
    }).exec();
    return res.json({ msg: "interests added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add interests` });
  }
});

router.post("/events/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      events: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.events;
    Member.findByIdAndUpdate(req.params.id, { $push: { events: bus } }).exec();
    return res.json({ msg: "events added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add events` });
  }
});

router.post("/tasks/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      tasks: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.tasks;
    Member.findByIdAndUpdate(req.params.id, { $push: { tasks: bus } }).exec();
    return res.json({ msg: "tasks added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add tasks` });
  }
});

router.post("/reviews/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      reviews: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.reviews;
    Member.findByIdAndUpdate(req.params.id, { $push: { reviews: bus } }).exec();
    return res.json({ msg: "reviews added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add reviews` });
  }
});

router.post("/masterclasses/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      masterclasses: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.masterclasses;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { masterclasses: bus }
    }).exec();
    return res.json({ msg: "masterclasses added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add masterclasses` });
  }
});

router.post("/Contracts/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      Contracts: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.Contracts;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { Contracts: bus }
    }).exec();
    return res.json({ msg: "Contracts added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Contracts` });
  }
});

router.post("/Notifications/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      Notifications: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.Notifications;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { Notifications: bus }
    }).exec();
    return res.json({ msg: "Notifications added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Notifications` });
  }
});

router.post("/oldProjects/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      oldProjects: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.oldProjects;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { oldProjects: bus }
    }).exec();
    return res.json({ msg: "oldProjects added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add oldProjects` });
  }
});

router.post("/projects/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      projects: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.projects;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { projects: bus }
    }).exec();
    return res.json({ msg: "projects added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add projects` });
  }
});

router.post("/RecommendedTasks/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      RecommendedTasks: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.RecommendedTasks;
    Member.findByIdAndUpdate(req.params.id, {
      $push: { RecommendedTasks: bus }
    }).exec();
    return res.json({ msg: "RecommendedTasks added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add RecommendedTasks` });
  }
});

router.get("/me/lifecoach/", (req, res) => {
  Member.find({ Lifecoach: true }).then(Members => res.json(Members));
});

// @route   POST api/members
// @desc    Register new member
// @access  Public
router.post("/", (req, res) => {
  const {
    Email,
    Password,
    Name,
    age,
    skills,
    interests,
    events,
    tasks,
    reviews,
    masterclasses
  } = req.body;
  // Simple validation
  if (
    !Email ||
    !Password ||
    !Name ||
    !age ||
    !skills ||
    !interests ||
    !events ||
    !tasks ||
    !reviews ||
    !masterclasses
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing member
  Member.findOne({ Email }).then(member => {
    if (member) return res.status(400).json({ msg: "Member already exists" });
    const newMember = new Member({
      Email,
      Password,
      Name,
      age,
      skills,
      interests,
      events,
      tasks,
      reviews,
      masterclasses,   Notifications: "please head to the head office to sign your contract at 10 am "
    });
    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newMember.Password, salt, (err, hash) => {
        if (err) throw err;
        newMember.Password = hash;
        newMember.save().then(member => {
          jwt.sign(
            { id: member.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                member: {
                  id: member.id,
                  Name: member.Name,
                  Email: member.Email,
                  age: member.age,
                  skills: member.skills,
                  interests: member.interests,
                  events: member.events,
                  tasks: member.tasks,
                  reviews: member.reviews,
                  masterclasses: member.masterclasses,
                  Notifications: member.Notifications
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
