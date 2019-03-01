const express = require('express');
const router = express.Router();

// Member Model
const Member = require('../../models/Member');

// @route   GET api/Members
// @desc    Get All Members
// @access  Public

router.get('/', (req, res) => {
  Member.find()
    .sort({ name: 1 })
    .then(Members => res.json(Members));
}); 

// @route   POST api/Members
// @desc    Create An Member
// @access  Public
router.post('/', (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    age: req.body.age,
    skills: req.body.skills,
    interests: req.body.interests,
    events: req.body.events,
    tasks: req.body.tasks,
    reviews: req.body.reviews,
    masterclasses: req.body.masterclasses,
    Lifecoach:req.body.Lifecoach,
    membership:req.body.membership,
    Contracts:req.body.Contracts,
    Email:req.body.Email,
    Password:req.body.Password,
    Notifications:req.body.Notifications
  });

  newMember.save().then(Member => res.json(Member));
});

// @route   DELETE api/Members/:id
// @desc    Delete A Member
// @access  Public
router.delete('/:id', (req, res) => {
  Member.findById(req.params.id)
    .then(Member => Member.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.get('/masterclasses', (req,res) => {
  /*Member.findOne ({Members: req.body.masterclasses}).then(Members => {
    if (!masterclasses){
        errors.nozeft = 'there is no nila';
        return res.status(404).json(errors);
    }
    {name: true, masterclasses: true}

    res.json (masterclasses);
  })
  .catch(err => res.status(404).json(err));
});
*/

/*Member.findOne ({Member: req.params.id}).then(masterclasses => {
  if (masterclasses){*/
      //update
      Member.findOne(
          {nila: req.params.masterclasses},
          {nila: true}
      ).catch(err => res.status(404).json(err));

      
  }
  /*if (!masterclasses){
      res.json (masterclasses);
      
  }*/
);



module.exports = router;
