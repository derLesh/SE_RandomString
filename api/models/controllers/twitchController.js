"use strict";
var MD5 = require('md5.js');

exports.welcome = function(req, res) {
    res.send("helo pepeL");
};

exports.random = function(req, res) {
    res.send(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15););   
}
