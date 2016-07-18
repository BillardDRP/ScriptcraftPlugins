'use strict'
// fetch libs
var Drone = require('drone'),
    blocks = require('blocks'),
    inventory = require('inventory'),
    items = require('items'),
    utils = require('utils'),
    sounds = require('sounds'),
    events = require('events');

    function betterlevelup(event) {
        var target = event.player;
        var levelnumber = 0
        levelnumber++
        echo('Congratulations! You reached' levelnumber'!');
    };
events.levelUp(betterlevelup);
