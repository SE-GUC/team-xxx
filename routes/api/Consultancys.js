const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("../../validations/ConsultancysValidation");

// Consultancy Model
const Consultancy = require("../../models/Consultancy");

router.get("/events/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.events);
    })
    .catch(err => next(err));
});

router.get("/projects/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.projects);
    })
    .catch(err => next(err));
});

router.get("/Reviews/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Reviews);
    })
    .catch(err => next(err));
});

router.get("/ReviewOwner/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.ReviewOwner);
    })
    .catch(err => next(err));
});
// @route   GET api/Consultancys
// @desc    Get All Consultancys
// @access  Public
router.get("/", (req, res) => {
  Consultancy.find()
    .sort({ name: 1 })
    .then(Consultancys => res.json(Consultancys));
});
//@ find a specific Consultancy by ID
router.get("/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
});

router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newConsultancy = await Consultancy.create(req.body);
    res.json({
      msg: "Consultancy was created successfully",
      data: newConsultancy
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/Notifications/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Notifications);
    })
    .catch(err => next(err));
});
router.get("/Email/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Email);
    })
    .catch(err => next(err));
});
router.get("/membership/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.membership);
    })
    .catch(err => next(err));
});
router.get("/Contracts/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Contracts);
    })
    .catch(err => next(err));
});
router.get("/Information/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Information);
    })
    .catch(err => next(err));
});
router.get("/events/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.events);
    })
    .catch(err => next(err));
});
router.get("/boardmembers/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.boardmembers);
    })
    .catch(err => next(err));
});
router.get("/partners/:id", function(req, res) {
  Consultancy.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.partners);
    })
    .catch(err => next(err));
});
// @route   DELETE api/Consultancys/:id
// @desc    Delete A Consultancy
// @access  Public
router.delete("/:id", (req, res) => {
  Consultancy.findById(req.params.id)
    .then(Consultancy =>
      Consultancy.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

router.put("/:id", async (req, res) => {
  try {
    const consultancy = await Consultancy.findById(req.params.id);
    if (!consultancy)
      return res.status(404).send({ error: "Consultancy does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    Consultancy.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return next(err);
      res.json({ msg: "Consultancy updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/business/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      business: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.business;
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { business: bus }
    }).exec();
    return res.json({ msg: "business added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add business` });
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
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { partners: bus }
    }).exec();
    return res.json({ msg: "partner added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add partner` });
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
    Consultancy.findByIdAndUpdate(req.params.id, {
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
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { events: bus }
    }).exec();
    return res.json({ msg: "events added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add events` });
  }
});

router.post("/reports/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      reports: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.reports;
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { reports: bus }
    }).exec();
    return res.json({ msg: "reports added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add reports` });
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
    Consultancy.findByIdAndUpdate(req.params.id, {
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
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { Notifications: bus }
    }).exec();
    return res.json({ msg: "Notifications added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Notifications` });
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
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { projects: bus }
    }).exec();
    return res.json({ msg: "projects added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add projects` });
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
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { Reviews: bus }
    }).exec();
    return res.json({ msg: "Reviews added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Reviews` });
  }
});

router.post("/Submission/:id", async (req, res) => {
  try {
    const status = Joi.validate(req.body, {
      Submission: Joi.string().required()
    });
    if (status.error) {
      return res.json({ error: status.error.details[0].message });
    }
    const bus = req.body.Submission;
    Consultancy.findByIdAndUpdate(req.params.id, {
      $push: { Submission: bus }
    }).exec();
    return res.json({ msg: "Submission added" });
  } catch (err) {
    console.log(err);
    return res.json({ error: `Error,cant add Submission` });
  }
});

router.get("/lifecoach/me/", (req, res) => {
  Consultancy.find({ Lifecoach: true }).then(Consultancys =>
    res.json(Consultancys)
  );
});

module.exports = router;
