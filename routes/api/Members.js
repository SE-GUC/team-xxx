const express = require("express");
const router = express.Router();

const validator = require("../../Validations/MembersValidation");

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

// @route   POST api/Members
// @desc    Create An Member
// @access  Public
router.post("/", (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    age: req.body.age,
    skills: req.body.skills,
    interests: req.body.interests,
    events: req.body.events,
    tasks: req.body.tasks,
    reviews: req.body.reviews,
    masterclasses: req.body.masterclasses,
    Lifecoach: req.body.Lifecoach,
    membership: req.body.membership,
    Contracts: req.body.Contracts,
    Email: req.body.Email,
    Password: req.body.Password,
    Notifications: req.body.Notifications,
    ReviewOwner: req.body.ReviewOwner,
    projects: req.body.projects,
    oldProjects: req.body.oldProjects,
    RecommendedTasks: req.body.RecommendedTasks
  });
  newMember.save().then(Member => res.json(Member));
});

router.put("/:id", function(req, res, next) {
  Member.findByIdAndUpdate(req.params.id, req.body, function(err) {
    if (err) return next(err);
    res.json({ msg: "Admin updated successfully" });
  });
});
module.exports = router;
