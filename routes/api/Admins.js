const express = require('express');
const router = express.Router();

const Admin = require('../../models/Admin');
//const Admin = require ('../../models/Meeting');

router.get('/', (req, res) => {
    Admin.find()
      .sort({ name: 1 })
      .then(Admins => res.json(Admins));
  });

  router.post('/', (req, res) => {
    const newAdmin = new Admin({
      
      Email:req.body.Email,
      Password:req.body.Password
    
    });
  
    newAdmin.save().then(Admin => res.json(Admin));
  });

  


  
  module.exports = router;