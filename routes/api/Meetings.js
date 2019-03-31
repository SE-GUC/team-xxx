const express = require("express");
const router = express.Router();

const validator = require("../../validations/MeetingsValidation");

const Meeting = require("../../models/Meeting");
router.get("/", (req, res) => {
  Meeting.find()
    .sort({ name: 1 })
    .then(Meetings => res.json(Meetings));
});

router.post("/", async (req, res) => {
  try {
    
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newMeeting = await Meeting.create(req.body);
    res.json({ msg: "Meeting was created successfully", data: newMeeting });
  } catch (error) {
    console.log(error);
  }
});

router.get("/memberEmial-1/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.MemberemailOne);
    })
    .catch(err => next(err));
});

router.get("/memberEmial-2/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.MemberemailTwo);
    })
    .catch(err => next(err));
});

router.get("/location/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Location);
    })
    .catch(err => next(err));
});

router.get("/Time/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.time);
    })
    .catch(err => next(err));
});

router.get("/StatusForAdmin/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.StatusMemberOne);
    })
    .catch(err => next(err));
});

router.get("/StatusForPartner/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.StatusMemberTwo);
    })
    .catch(err => next(err));
});

//@ find a specific Meeting by ID
router.get("/:id", function(req, res) {
  Meeting.findById(req.params.id)
    .then(Meeting => {
      if (!Meeting) {
        return res.status(404).end();
      }
      return res.status(200).json(Meeting);
    })
    .catch(err => next(err));
});

router.delete("/:id", (req, res) => {
  Meeting.findById(req.params.id)
    .then(Meeting => Meeting.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
router.put("/:id", async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);
    if (!meeting) return res.status(404).send({ error: "Meeting does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    Meeting.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return next(err);
      res.json({ msg: "Meeting updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
