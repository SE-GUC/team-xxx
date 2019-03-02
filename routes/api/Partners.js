const express = require("express");
const router = express.Router();

// Partner Model
const Partner = require("../../models/Partner");

// @route   GET api/Partners

// @desc    Get All Partners

// @access  Public

router.get("/", (req, res) => {
  Partner.find()

    .sort({ name: 1 })

    .then(Partners => res.json(Partners));
});
router.get("/lifecoach/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.Lifecoach);
    })
    .catch(err => next(err));
});

router.get("/boardmembers/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.boardmembers);
    })
    .catch(err => next(err));
});

router.get("/events/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.events);
    })
    .catch(err => next(err));
});

router.get("/field/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.field);
    })
    .catch(err => next(err));
});

router.get("/projects/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.projects);
    })
    .catch(err => next(err));
});

router.get("/feedback/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.feedback);
    })
    .catch(err => next(err));
});

router.get("/Reviews/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.Reviews);
    })
    .catch(err => next(err));
});

router.get("/ReviewOwner/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.ReviewOwner);
    })
    .catch(err => next(err));
});

router.get("/Notifications/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.Notifications);
    })
    .catch(err => next(err));
});

router.get("/Email/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.Email);
    })
    .catch(err => next(err));
});

router.get("/business/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.business);
    })
    .catch(err => next(err));
});

router.get("/membership/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.membership);
    })
    .catch(err => next(err));
});

router.get("/Contracts/:id", function(req, res) {
  Partner.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      returnres.status(200).json(doc.Contracts);
    })
    .catch(err => next(err));
});

// @route   POST api/Partners
// @desc    Create An Partner
// @access  Public
router.post("/", (req, res) => {
  const newPartner = new Partner({
    business: req.body.business,
    partners: req.body.partners,
    boardmembers: req.body.boardmembers,
    events: req.body.events,
    field: req.body.field,
    projects: req.body.projects,
    feedback: req.body.feedback,
    Lifecoach: req.body.Lifecoach,
    membership: req.body.membership,
    Contracts: req.body.Contracts,
    Email: req.body.Email,
    Password: req.body.Password,
    Notifications: req.body.Notifications,
    Reviews: req.body.Reviews,
    ReviewOwner: req.body.ReviewOwner,
    Consultant: req.body.Consultant
  });

  newPartner.save().then(Partner => res.json(Partner));
});

// @route   DELETE api/Partners/:id
// @desc    Delete A Partner
// @access  Public
router.delete("/:id", (req, res) => {
  Partner.findById(req.params.id)
    .then(Partner => Partner.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// router.post('/', (req,res) =>{
// Partner.findOneAndUpdate ({Consultant: req.body.Consultant},newData, {new:true})
// .then ((partner) => {
//   if ( partner.Consultant ==true ) {
//     res.status(200).json({
//       msg: "Consultant Successfully Added"
//     });
//   } else {
//     res.status(422).json({
//       msg: "Description of the project"
//     })
//   }
// })
// });

router.put("/update/:id", function(req, res) {
  var id = req.params.id;

  Partner.findOne({ _id: id }, function(err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        if (req.body.Email) {
          foundObject.Email = req.body.Email;
        }

        if (req.body.Password) {
          foundObject.Password = req.body.Password;
        }

        if (req.body.business) {
          foundObject.business = req.body.business;
        }
        if (req.body.partners) {
          foundObject.partners = req.body.partners;
        }
        if (req.body.boardmembers) {
          foundObject.boardmembers = req.body.boardmembers;
        }
        if (req.body.events) {
          foundObject.events = req.body.events;
        }
        if (req.body.field) {
          foundObject.field = req.body.field;
        }
        if (req.body.projects) {
          foundObject.projects = req.body.projects;
        }
        if (req.body.feedback) {
          foundObject.feedback = req.body.feedback;
        }
        if (req.body.Lifecoach) {
          foundObject.Lifecoach = req.body.Lifecoach;
        }
        if (req.body.membership) {
          foundObject.skills = req.body.membership;
        }
        if (req.body.Contracts) {
          foundObject.category = req.body.Contracts;
        }
        if (req.body.Notifications) {
          foundObject.state = req.body.Notifications;
        }
        foundObject.save(function(err, updatedObject) {
          if (err) {
            console.log(err);
          } else {
            res.send(updatedObject);
          }
        });
      }
    }
  });
});
module.exports = router;