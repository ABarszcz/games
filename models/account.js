var mongoose = require('mongoose');

//get mongoose for passport
var plm = require('passport-local-mongoose');

//define schema for users
var AccountSchema = new mongoose.Schema({
});

//used for configuring options - might not need
AccountSchema.plugin(plm);

module.exports = mongoose.model('Account', AccountSchema);
