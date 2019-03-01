const express = require('express');
const router = express.Router();

// Member Model
const Member = require('../../models/Member');

// @route   GET api/Members
// @desc    Get All Members
// @access  Public
router.get('/events/:id',function (req, res) {
  Member.findById(req.params.id).then(doc=>{ if(!doc){
     return res.status(404).end();}
    returnres.status(200).json(doc.events);})
    .catch(err=>next(err));});

    router.get('/projects/:id',function (req, res) {
      Member.findById(req.params.id).then(doc=>{ if(!doc){
         return res.status(404).end();}
        returnres.status(200).json(doc.projects);})
        .catch(err=>next(err));});

        router.get('/Reviews/:id',function (req, res) {
          Member.findById(req.params.id).then(doc=>{ if(!doc){
             return res.status(404).end();}
            returnres.status(200).json(doc.reviews);})
            .catch(err=>next(err));});

            router.get('/ReviewOwner/:id',function (req, res) {
              Member.findById(req.params.id).then(doc=>{ if(!doc){
                 return res.status(404).end();}
                returnres.status(200).json(doc.ReviewOwner);})
                .catch(err=>next(err));});

                router.get('/Notifications/:id',function (req, res) {
                  Member.findById(req.params.id).then(doc=>{ if(!doc){
                     return res.status(404).end();}
                    returnres.status(200).json(doc.Notifications);})
                    .catch(err=>next(err));});

                    router.get('/Email/:id',function (req, res) {
                      Member.findById(req.params.id).then(doc=>{ if(!doc){
                         return res.status(404).end();}
                        returnres.status(200).json(doc.Email);})
                        .catch(err=>next(err));});

                        

                        router.get('/interests/:id',function (req, res) {
                              Member.findById(req.params.id).then(doc=>{ if(!doc){
                                 return res.status(404).end();}
                                returnres.status(200).json(doc.interests);})
                                .catch(err=>next(err));});

                                router.get('/tasks/:id',function (req, res) {
                                  Member.findById(req.params.id).then(doc=>{ if(!doc){
                                     return res.status(404).end();}
                                    returnres.status(200).json(doc.tasks);})
                                    .catch(err=>next(err));});

                                    router.get('/membership/:id',function (req, res) {
                                      Member.findById(req.params.id).then(doc=>{ if(!doc){
                                         return res.status(404).end();}
                                        returnres.status(200).json(doc.membership);})
                                        .catch(err=>next(err));});

                                        router.get('/Contracts/:id',function (req, res) {
                                          Member.findById(req.params.id).then(doc=>{ if(!doc){
                                             return res.status(404).end();}
                                            returnres.status(200).json(doc.Contracts);})
                                            .catch(err=>next(err));});

                                            router.get('/lifecoach/:id',function (req, res) {
                                              Member.findById(req.params.id).then(doc=>{ if(!doc){
                                                 return res.status(404).end();}
                                                returnres.status(200).json(doc.Lifecoach);})
                                                .catch(err=>next(err));});

                                                router.get('/membership/:id',function (req, res) {
                                                  Member.findById(req.params.id).then(doc=>{ if(!doc){
                                                     return res.status(404).end();}
                                                    returnres.status(200).json(doc.membership);})
                                                    .catch(err=>next(err));});



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
    Notifications:req.body.Notifications,
    ReviewOwner: req.body.ReviewOwner,
    projects:req.body.projects
  });

  newMember.save().then(Member => res.json(Member));
});

// @route   DELETE api/Members/:id
// @desc    Delete A Member
// @access  Public
router.delete('/:id', (req, res) => {
  Member.findById(req.params.id)
    .then(Member => Member.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false })); //console.log("")
});

module.exports = router;