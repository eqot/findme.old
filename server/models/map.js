var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/findme_dev');

var MapSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now}
});

exports.Map = mongoose.model('Map', MapSchema);
