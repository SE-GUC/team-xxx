const express = require('express');
const router = express.Router();

const Meeting = require('../../models/Meeting');
router.get('/', (req, res) => {
    Meeting.find()
      .sort({ name: 1 })
      .then(Meetings => res.json(Meetings));


    
      
  });
  
  router.post('/', (req, res) => {
    const newMeeting = new Meeting({
        Memberemail_1: req.body.Memberemail_1,
        Memberemail_2: req.body.Memberemail_2,
        Location: req.body.Location,
        time: req.body.time,
        Status: req.body.Status
      
    });
  
    newMeeting.save().then(Meeting => res.json(Meeting));
  });

  router.delete('/:id', (req, res) => {
    Meeting.findById(req.params.id)
      .then(Meeting => Meeting.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  


  module.exports = router;