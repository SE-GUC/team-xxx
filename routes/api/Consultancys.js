const express = require("express");
const router = express.Router();

// Consultancy Model
const Consultancy = require("../../models/Consultancy");

// @route   GET api/Consultancys
// @desc    Get All Consultancys
// @access  Public
router.get("/", (req, res) => {
  Consultancy.find()
    .sort({ name: 1 })
    .then(Consultancys => res.json(Consultancys));
});

// @route   POST api/Consultancys
// @desc    Create An Consultancy
// @access  Public
router.post("/", (req, res) => {
  const newConsultancy = new Consultancy({
    business: req.body.business,
    partners: req.body.partners,
    boardmembers: req.body.boardmembers,
    events: req.body.events,
    reports: req.body.reports,
    Lifecoach: req.body.Lifecoach,
    membership: req.body.membership,
    Contracts: req.body.Contracts,
    Email: req.body.Email,
    Password: req.body.Password,
    Notifications: req.body.Notifications,
    ConsultancyAcceptance: req.body.ConsultancyAcceptance
  });

  newConsultancy.save().then(Consultancy => res.json(Consultancy));
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

router.put("/update/:id", function(req, res) {
  var id = req.params.id;
  Consultancy.findOne({ _id: id }, function(err, foundObject) {
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
        if (req.body.reports) {
          foundObject.reports = req.body.reports;
        }
        if (req.body.Lifecoach) {
          foundObject.Lifecoach = req.body.Lifecoach;
        }
        if (req.body.membership) {
          foundObject.membership = req.body.membership;
        }
        if (req.body.Contracts) {
          foundObject.Contracts = req.body.Contracts;
        }
        if (req.body.Notifications) {
          foundObject.Notifications = req.body.Notifications;
        }
        if (req.body.consultantAcceptance) {
          foundObject.consultantAcceptance = req.body.consultantAcceptance;
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
