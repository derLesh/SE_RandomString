"use strict";

exports.welcome = function(req, res) {
    res.send("MrDestructoid Booting up ... Welcome Twitch Chat");
};

exports.random = function(req, res) {
   	var rng = Math.random().toString(36).substring(1, 30) + Math.random().toString(36).substring(1, 30);
	
	req.query("${settitle " + rng + "}");
    res.send("Here is your random title: " + rng);  
}
