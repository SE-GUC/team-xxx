const express = require("express");
const router = express.Router();

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

module.exports = router;
