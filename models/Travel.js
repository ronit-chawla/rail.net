const mongoose = require('mongoose');

const { Schema } = mongoose;

const travelSchema = new Schema({
  origin          : {
    type     : String,
    required : true,
  },
  status          : {
    type : String,
  },
  destination     : {
    type     : String,
    required : true,
  },
  halts           : [
    {
      type     : String,
      required : true,
    },
  ],
  onboardServices : [
    {
      type : mongoose.Types.ObjectId,
      ref  : 'Service',
    },
  ],
  id              : {
    type     : String,
    required : true,
  },
});

travelSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Travel', travelSchema);
