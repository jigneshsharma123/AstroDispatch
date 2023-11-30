const mongoose= require('mongoose');

const mailSchema = new mongoose.Schema({

});

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail; 