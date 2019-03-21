const express = require("express");
const router = express.Router();

const validator = require("../../validations/AdminsValidation");

const Admin = require("../../models/Admin");

router.post("/", async (req, res) => {
  try {
    User.findOne({ email }).then(user => {
      if (user) return res.status(400).json({ msg: "User already exists" });
    });
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newAdmin = await Admin.create(req.body);
    res.json({ msg: "Admin was created successfully", data: newAdmin });
  } catch (error) {
    console.log(error);
  }
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
module.exports = router;
