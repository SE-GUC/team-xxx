const express = require("express");
const router = express.Router();
const validator = require("../../validations/PartnersValidation");
const Partner = require("../../models/Partner");

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

// @route   POST api/Partners
// @desc    Create An Partner
// @access  Public
router.post("/", async (req, res) => {
  try {
    Partner.findOne({ Email }).then(user => {
      if (user) return res.status(400).json({ msg: "User already exists" });
    });
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newPartner = await Partner.create(req.body);
    res.json({ msg: "Partner was created successfully", data: newPartner });
  } catch (error) {
    console.log(error);
  }
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
    if (!partner) return res.status(404).send({ error: "Partner does not exist" });
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
module.exports = router;
