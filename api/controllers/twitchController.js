"use strict";

exports.welcome = function(req, res) {
    res.send("MrDestructoid Booting up ... Welcome Twitch Chat");
};

exports.random = function(req, res) {
	var length = req.query.length
	var rng = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
	
    	res.send(rng);
}
