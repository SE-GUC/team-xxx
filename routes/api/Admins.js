const express = require("express");
const router = express.Router();
const validator = require("../../validations/AdminsValidation");
const Admin = require("../../models/Admin");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

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

router.put("/:id", async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).send({ error: "Admin does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    Admin.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return next(err);
      res.json({ msg: "Admin updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// @route   POST api/Admin
// @desc    Register new Admin
// @access  Public
router.post("/", (req, res) => {
  const { Name, Email, Password } = req.body;
  // Simple validation
  if (!Name || !Email || !Password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing Admin
  Admin.findOne({ Email }).then(admin => {
    if (admin) return res.status(400).json({ msg: "Admin already exists" });
    const newAdmin = new Admin({
      Name,
      Email,
      Password
    });
    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newAdmin.Password, salt, (err, hash) => {
        if (err) throw err;
        newAdmin.Password = hash;
        newAdmin.save().then(admin => {
          jwt.sign(
            { id: admin.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                admin: {
                  id: admin.id,
                  Name: admin.Name,
                  Email: admin.email
                }
              });
            }
          );
        });
      });
    });
  });
});
module.exports = router;
