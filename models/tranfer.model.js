var mongoose = require('mongoose')

var tranferSchema = new mongoose.Schema({
    account: String,
    amount: String,
    userID: String,
});

var  Tranfers = mongoose.model('Tranfers', tranferSchema,'tranfers');

module.exports = Tranfers;