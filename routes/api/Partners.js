const express = require("express");
const router = express.Router();
const validator = require("../../validations/PartnersValidation");
const Partner = require("../../models/Partner");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get("/", (req, res) => {
  Partner.find()
    .sort({ name: 1 })
    .then(Partners => res.json(Partners));
});

router.get("/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
});
router.get("/lifecoach/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Lifecoach);
    })
    .catch(err => next(err));
});

router.get("/boardmembers/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.boardmembers);
    })
    .catch(err => next(err));
});

router.get("/events/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.events);
    })
    .catch(err => next(err));
});

router.get("/field/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.field);
    })
    .catch(err => next(err));
});

router.get("/projects/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.projects);
    })
    .catch(err => next(err));
});

router.get("/feedback/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.feedback);
    })
    .catch(err => next(err));
});

router.get("/Reviews/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Reviews);
    })
    .catch(err => next(err));
});

router.get("/ReviewOwner/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.ReviewOwner);
    })
    .catch(err => next(err));
});

router.get("/Notifications/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Notifications);
    })
    .catch(err => next(err));
});

router.get("/Email/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Email);
    })
    .catch(err => next(err));
});

router.get("/business/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.business);
    })
    .catch(err => next(err));
});

router.get("/membership/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.membership);
    })
    .catch(err => next(err));
});

router.get("/Contracts/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Contracts);
    })
    .catch(err => next(err));
});

// @route   DELETE api/Partners/:id
// @desc    Delete A Partner
// @access  Public
router.delete("/:id", (req, res) => {
  Partner.findById(req.params.id)
    .then(Partner => Partner.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.put("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner)
      return res.status(404).send({ error: "Partner does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    Partner.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return next(err);
      res.json({ msg: "Partner updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/partners/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      partners: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.partners;
    Partner.findByIdAndUpdate(req.params.id, {
      $push: { partners: bus }
    }).exec();
    return res.json({ msg: "partners added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add partners` });
  }
});

router.post("/boardmembers/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      boardmembers: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.boardmembers;
    Partner.findByIdAndUpdate(req.params.id, {
      $push: { boardmembers: bus }
    }).exec();
    return res.json({ msg: "boardmembers added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add boardmembers` });
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
    Partner.findByIdAndUpdate(req.params.id, { $push: { events: bus } }).exec();
    return res.json({ msg: "events added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add events` });
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
    Partner.findByIdAndUpdate(req.params.id, {
      $push: { projects: bus }
    }).exec();
    return res.json({ msg: "projects added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add projects` });
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
    Partner.findByIdAndUpdate(req.params.id, {
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
    Partner.findByIdAndUpdate(req.params.id, {
      $push: { Notifications: bus }
    }).exec();
    return res.json({ msg: "Notifications added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Notifications` });
  }
});
router.post("/Reviews/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      Reviews: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.Reviews;
    Partner.findByIdAndUpdate(req.params.id, {
      $push: { Reviews: bus }
    }).exec();
    return res.json({ msg: "Reviews added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Reviews` });
  }
});
router.get("/me/lifecoach/", (req, res) => {
  Partner.find({ Lifecoach: true }).then(Partners => res.json(Partners));
});

// @route   POST api/partners
// @desc    Register new partner
// @access  Public
router.post("/", (req, res) => {
  const {
    Name,
    Email,
    Password,
    business,
    partners,
    boardmembers,
    events,
    field,
    projects,
    feedback
  } = req.body;
  // Simple validation
  if (
    !Name ||
    !Email ||
    !Password ||
    !business ||
    !partners ||
    !boardmembers ||
    !events ||
    !field ||
    !projects ||
    !feedback
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing partner
  Partner.findOne({ Email }).then(partner => {
    if (partner) return res.status(400).json({ msg: "Partner already exists" });
    const newPartner = new Partner({
      Name,
      Email,
      Password,
      business,
      partners,
      boardmembers,
      events,
      field,
      projects,
      feedback
    });
    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPartner.Password, salt, (err, hash) => {
        if (err) throw err;
        newPartner.Password = hash;
        newPartner.save().then(partner => {
          jwt.sign(
            { id: partner.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                partner: {
                  id: partner.id,
                  Name: partner.Name,
                  Email: partner.Email,
                  business: partner.business,
                  partners: partner.partners,
                  boardmembers: partner.boardmembers,
                  events: partner.events,
                  field: partner.field,
                  projects: partner.projects,
                  feedback: partner.feedback
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
