const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name : {
    type     : String,
    required : true,
  },
  img  : {
    type     : String,
    required : true,
  },
});

serviceSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Service', serviceSchema);
