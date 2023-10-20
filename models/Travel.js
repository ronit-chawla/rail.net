const mongoose = require('mongoose');

const { Schema } = mongoose;

const travelSchema = new Schema({
  origin          : {
    type     : String,
    required : true,
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
      type     : String,
      required : true,
    },
  ],
  porter          : {
    type     : Boolean,
    required : true,
  },
});

travelSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Travel', travelSchema);
