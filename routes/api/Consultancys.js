const express = require('express');
const router = express.Router();

// Consultancy Model
const Consultancy = require('../../models/Consultancy');

router.get('/events/:id',function (req, res) {
  Consultancy.findById(req.params.id).then(doc=>{ if(!doc){
     return res.status(404).end();}
    returnres.status(200).json(doc.events);})
    .catch(err=>next(err));});

    router.get('/projects/:id',function (req, res) {
      Consultancy.findById(req.params.id).then(doc=>{ if(!doc){
         return res.status(404).end();}
        returnres.status(200).json(doc.projects);})
        .catch(err=>next(err));});

        router.get('/Reviews/:id',function (req, res) {
          Consultancy.findById(req.params.id).then(doc=>{ if(!doc){
             return res.status(404).end();}
            returnres.status(200).json(doc.Reviews);})
            .catch(err=>next(err));});

            router.get('/ReviewOwner/:id',function (req, res) {
              Consultancy.findById(req.params.id).then(doc=>{ if(!doc){
                 return res.status(404).end();}
                returnres.status(200).json(doc.ReviewOwner);})
                .catch(err=>next(err));});
// @route   GET api/Consultancys
// @desc    Get All Consultancys
// @access  Public
//r//outer.get('/', (req, res) => {
  //Consultancy.findById(req.params.id)
  //Consultancy.find(events)
  //Consultancy.find(Reviews)
  //Consultancy.find(ReviewOwner)
  //Consultancy.find(projects)
  
    //.sort({ name: 1 })
    //.then(Consultancys => res.json(Consultancys));
//});

// @route   POST api/Consultancys
// @desc    Create An Consultancy
// @access  Public
router.post('/', (req, res) => {
  const newConsultancy = new Consultancy({
    business: req.body.business,
    partners: req.body.partners,
    boardmembers: req.body.boardmembers,
    events: req.body.events,
    reports: req.body.reports,
    Lifecoach:req.body.Lifecoach,
    membership:req.body.membership,
    Contracts:req.body.Contracts,
    Email:req.body.Email,
    Password:req.body.Password,
    Notifications:req.body.Notifications,
    Reviews: req.body.Reviews,
    ReviewOwner: req.body.ReviewOwner,
    projects:req.body.projects
  });

  newConsultancy.save().then(Consultancy => res.json(Consultancy));
});

// @route   DELETE api/Consultancys/:id
// @desc    Delete A Consultancy
// @access  Public
router.delete('/:id', (req, res) => {
  Consultancy.findById(req.params.id)
    .then(Consultancy => Consultancy.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;