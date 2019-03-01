const express = require('express');
const router = express.Router();

const Meeting = require('../../models/Meeting');
router.get('/', (req, res) => {
    Meeting.find()
      .sort({ name: 1 })
      .then(Meetings => res.json(Meetings));

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
router.get('/memberEmial-1/:id', function(req, res){
  Meeting.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.MemberemailOne);
  })
  .catch(err => next(err));
});

router.get('/memberEmial-2/:id', function(req, res){
  Meeting.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.MemberemailTwo);
  })
  .catch(err => next(err));
});

router.get('/location/:id', function(req, res){
  Meeting.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.Location);
  })
  .catch(err => next(err));
});

router.get('/Time/:id', function(req, res){
  Meeting.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.time);
  })
  .catch(err => next(err));
});

router.get('/StatusForAdmin/:id', function(req, res){
  Meeting.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.StatusMemberOne);
  })
  .catch(err => next(err));
});

router.get('/StatusForPartner/:id', function(req, res){
  Meeting.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.StatusMemberTwo);
  })
  .catch(err => next(err));
});



  
  router.post('/', (req, res) => {
    const newMeeting = new Meeting({
        Memberemail_1: req.body.MemberemailOne,
        Memberemail_2: req.body.MemberemailTwo,
        Location: req.body.Location,
        time: req.body.time,
        StatusMemberOne: req.body.StatusMemberOne,
        StatusMemberTwo: req.body.StatusMemberTwo
      
    });
  
    newMeeting.save().then(Meeting => res.json(Meeting));
  });

  router.delete('/:id', (req, res) => {
    Meeting.findById(req.params.id)
      .then(Meeting => Meeting.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  


  module.exports = router;