const Model = require('../models/index');
const {Appointment, Slot} = Model;

const slotController = {
  all (req, res) {
    // Returns all slots
    Slot.find({})
          .exec((err, slots) => res.json(slots))
  },
  create (req, res) {
    var requestBody = req.body;

    var newslot = new Slot ({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now()
    });
    newslot.save((err, saved) => {
      //Returns the new Slot
      //after a successful save
      Slot
        .findOne({_id: saved._id})
        .exec((err, Slot) => res.json(Slot));
    })
  },
  findByDate (req, res) {
    var slot_date = req.params.slot_date;
    console.log('Slot date: ', slot_date);
    //slot_date = '2017-11-09';

    //Returns all Slot with present date
    Slot.find({})
        .where('slot_date').equals(slot_date)
        .exec((err, slots) => res.json(slots));
  }
};

module.exports = slotController;