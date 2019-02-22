const Model = require('../models/index');
const { Appointment, Slot } = Model;
const Nexmo = require('nexmo');

const appointmentController = {
  all(req, res) {
    // Returns all appointments
    Appointment.find({}).exec((err, appointments) => res.json(appointments));
  },
  create(req, res) {
    var requestBody = req.body;

    var newslot = new Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now()
    });
    newslot.save();
    // Creates a new record from a submitted form
    var newappointment = new Appointment({
      name: requestBody.name,
      email: requestBody.email,
      phone: requestBody.phone,
      slots: newslot._id
    });

    const nexmo = new Nexmo({
      apiKey: 'd311f08b',
      apiSecret: 'szyUbQmtbbobR7ck'
    });

    let msg =
      requestBody.name +
      " " +
      "this message is to confirm your appointment at" +
      " " +
      requestBody.slot_time +" On "+ requestBody.slot_date;

    // and saves the record to
    // the data base
    newappointment.save((err, saved) => {
      // Returns the saved appointment
      // after a successful save
      Appointment.find({ _id: saved._id })
        .populate("slots")
        .exec((err, appointment) => res.json(appointment));

        const from = 'Nexmo'
        const to = requestBody.phone

      nexmo.message.sendSms(from, to, msg, (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      });
    });
  }
};

module.exports = appointmentController;
