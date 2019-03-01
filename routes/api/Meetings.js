const express = require("express");
const router = express.Router();


const Meeting = require('../../models/Meeting');
router.get('/', (req, res) => {
    Meeting.find()
      .sort({ name: 1 })
      .then(Meetings => res.json(Meetings));
  });
  
  
  router.post('/', (req, res) => {
    const newMeeting = new Meeting({
        MemberemailOne: req.body.MemberemailOne,
        MemberemailTwo: req.body.MemberemailTwo,
        Location: req.body.Location,
        time: req.body.time,
        Status: req.body.Status
      
    });
  
    newMeeting.save().then(Meeting => res.json(Meeting));
  });
  
  


  //   Meetings.findOne ({Meeting: req.Meeting.id}).then(Meetings => {
  //       if (!meeting){
  //           errors.nomeeting = 'there is no such meeting';
  //           return res.status(404).json(errors);
  //       }
  //       res.json (meeting);
  //     })
  //     .catch(err => res.status(404).json(err));
  // Meetings.findOne ({Meeting: req.params.id}).then(meetings => {
  //     if (meetings){
  //         //update
  //         Meetings.findOneAndUpdate(
  //             {meeting: req.params.id},
  //             {$set: newMeeting},
  //             {new: true}
  //         ).then(meetings=> res.json(meetings));

  //     }
  //     if (meetings){
  //         res.json (meeting);

  //     }
  // });
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

router.post("/", (req, res) => {
  const newMeeting = new Meeting({
    MemberemailOne: req.body.MemberemailOne,
    MemberemailTwo: req.body.MemberemailTwo,
    Location: req.body.Location,
    time: req.body.time,
    StatusMemberOne: req.body.StatusMemberOne,
    StatusMemberTwo: req.body.StatusMemberTwo
  });

  newMeeting.save().then(Meeting => res.json(Meeting));
});

router.delete("/:id", (req, res) => {
  Meeting.findById(req.params.id)
    .then(Meeting => Meeting.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.put("/update/:id", function(req, res) {
  var id = req.params.id;
  Meeting.findOne({ _id: id }, function(err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        if (req.body.MemberemailOne) {
          foundObject.MemberemailOne = req.body.MemberemailOne;
        }
        if (req.body.MemberemailTwo) {
          foundObject.MemberemailTwo = req.body.MemberemailTwo;
        }
        if (req.body.Location) {
          foundObject.Location = req.body.Location;
        }
        if (req.body.time) {
          foundObject.time = req.body.time;
        }
        if (req.body.Status) {
          foundObject.Status = req.body.Status;
        }
        foundObject.save(function(err, updatedObject) {
          if (err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.send(updatedObject);
          }
        });
      }
    }
  });
});

module.exports = router;