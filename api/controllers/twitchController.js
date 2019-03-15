"use strict";

exports.welcome = function(req, res) {
    res.send("MrDestructoid Booting up ... Welcome Twitch Chat");
};

exports.random = function(req, res) {
    res.send("Here is your random title: " + Math.random().toString(36).substring(1, 30) + Math.random().toString(36).substring(1, 30));  
}
