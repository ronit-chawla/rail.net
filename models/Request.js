const mongoose = require('mongoose');

const { Schema } = mongoose;

const requestSchema = new Schema({
  ticketID : {
    type     : String,
    required : true,
  },
  halt     : {
    type : String,
  },
  type     : {
    type     : String,
    required : true,
  },
  travelID : {
    type : mongoose.Types.ObjectId,
    ref  : 'Travel',
  },
  seat     : {
    type     : Number,
    required : true,
  },
  name     : {
    type     : String,
    required : true,
  },
});

requestSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Request', requestSchema);
