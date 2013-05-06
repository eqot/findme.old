
var Map = require('../models/map').Map;

exports.create = function (req, res) {
    var map = new Map();
    console.log(map);

    map.save(function (err) {
        if (!err) {
            res.send(map);
        } else {
            return console.log(err);
        }
    });
};

exports.read = function (req, res) {
    res.send(null);
};
