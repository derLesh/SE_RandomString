"use strict";

module.exports = function(app) {
    var twitch = require("../controllers/twitchController");
    
    app.route("/twitch/random")
        .get(twitch.random);
};
