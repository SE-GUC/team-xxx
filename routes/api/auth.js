const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// Admin Model
const Admin = require("../../models/Admin");
const Partner = require("../../models/Partner");

// @route   POST api/auth
// @desc    Auth admin
// @access  Public
router.post("/", (req, res) => {
  const { Email, Password } = req.body;
  // Simple validation
  if (!Email || !Password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing admin
  Admin.findOne({ Email }).then(admin => {
    if (!admin) return res.status(400).json({ msg: "Admin Does not exist" });
    // Validate Password
    bcrypt.compare(Password, admin.Password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
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
              Email: admin.Email
            }
          });
        }
      );
    });
  });
});

// @route   GET api/auth/admin
// @desc    Get admin data
// @access  Private
router.get("/Admin", auth, (req, res) => {
  Admin.findById(req.admin.id)
    .select("-Passwords")
    .then(admin => res.json(admin));
});

// @route   POST api/auth
// @desc    Auth Partner
// @access  Public
router.post("/partner", (req, res) => {
  const { Email, Password } = req.body;
  // Simple validation
  if (!Email || !Password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing partner
  Partner.findOne({ Email }).then(partner => {
    if (!partner)
      return res.status(400).json({ msg: "Partner Does not exist" });
    // Validate Password
    bcrypt.compare(Password, partner.Password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        { id: partner.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            partner: {
              id: partner.id,
              Name: partner.Name,
              Email: partner.Email
            }
          });
        }
      );
    });
  });
});

// @route   GET api/auth/partner
// @desc    Get partner data
// @access  Private
router.get("/Partner", auth, (req, res) => {
  Partner.findById(req.partner.id)
    .select("-Passwords")
    .then(partner => res.json(partner));
});

// @route   POST api/auth
// @desc    Auth Member
// @access  Public
router.post("/member", (req, res) => {
  const { Email, Password } = req.body;
  // Simple validation
  if (!Email || !Password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing member
  Member.findOne({ Email }).then(member => {
    if (!member) return res.status(400).json({ msg: "Member Does not exist" });
    // Validate Password
    bcrypt.compare(Password, member.Password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        { id: member.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            member: {
              id: member.id,
              Name: member.Name,
              Email: member.Email
            }
          });
        }
      );
    });
  });
});

// @route   GET api/auth/member
// @desc    Get member data
// @access  Private
router.get("/member", auth, (req, res) => {
  Member.findById(req.member.id)
    .select("-Passwords")
    .then(member => res.json(member));
});

// @route   POST api/auth
// @desc    Auth consultancy
// @access  Public
router.post("/consultancy", (req, res) => {
  const { Email, Password } = req.body;
  // Simple validation
  if (!Email || !Password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing consultancy
  Consultancy.findOne({ Email }).then(consultancy => {
    if (!consultancy)
      return res.status(400).json({ msg: "Consultancy Does not exist" });
    // Validate Password
    bcrypt.compare(Password, consultancy.Password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        { id: consultancy.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            consultancy: {
              id: consultancy.id,
              Name: consultancy.Name,
              Email: consultancy.Email
            }
          });
        }
      );
    });
  });
});

// @route   GET api/auth/consultancy
// @desc    Get consultancy data
// @access  Private
router.get("/consultancy", auth, (req, res) => {
  Consultancy.findById(req.consultancy.id)
    .select("-Passwords")
    .then(consultancy => res.json(consultancy));
});
module.exports = router;
