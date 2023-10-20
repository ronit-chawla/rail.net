const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  id       : {
    type     : String,
    required : true,
  },
  name     : {
    type     : String,
    required : true,
  },
  travelID : {
    type : mongoose.Types.ObjectId,
    ref  : 'Travel',
  },
});

ticketSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Ticket', ticketSchema);
