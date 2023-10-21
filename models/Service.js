const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name : {
    type     : String,
    required : true,
  },
  img  : {
    type     : Boolean,
    required : true,
  },
});

stationSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Service', serviceSchema);
