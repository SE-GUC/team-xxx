const express = require("express");
const router = express.Router();
const Joi = require('joi');

const Admin = require("../../models/Admin");
//const Admin = require ('../../models/Meeting');
router.post('/', (req, res) => {
	const Email = req.body.Email
	const Password = req.body.Password
	const schema = {
		Email: Joi.string().email().required(),
		Password: Joi.string().min(3).max(15).required(),
	}
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });
	const newAdmin = new Admin({
    Email,
    Password
  });
  newAdmin.save().then(Admin => res.json(Admin));
});

router.get("/", (req, res) => {
  Admin.find()
    .sort({ name: 1 })
    .then(Admins => res.json(Admins));
});

router.delete("/:id", (req, res) => {
  Admin.findById(req.params.id)
    .then(Meeting => Admin.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//@ find a specific Admin by ID
router.get("/:id", function(req, res) {
  Admin.findById(req.params.id)
    .then(Admin => {
      if (!Admin) {
        return res.status(404).end();
      }
      return res.status(200).json(Admin);
    })
    .catch(err => next(err));
});

router.get("/AdminEmail/:id", function(req, res) {
  Admin.findById(req.params.id)
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(200).json(doc.Email);
    })
    .catch(err => next(err));
});

router.put("/:id", function(req, res) {
  var id = req.params.id;
  const Email = req.body.Email
	const Password = req.body.Password
	const schema = {
		Email: Joi.string().email().required(),
		Password: Joi.string().min(3).max(15).required(),
	}
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });
  Admin.findOne({ _id: id }, function(err, foundObject) {
    if (err) {
      console.log(err);
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        if (Email) {
          foundObject.Email = Email;
        }
        if (Password) {
          foundObject.Password = Password;
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
