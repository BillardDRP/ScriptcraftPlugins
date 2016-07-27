'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds'),
    recipies = require('recipies'),
    events = require('events');

var tnt = items.tnt(1),
    sword = items.iron_sword(1),
    Knife = items.iron_sword(1);

    Knife.setDisplayName("Knife");
    Knife.setLore("It's one hit dont k'cha know? Hunter weapon!");

    var HunterKnife = recipes.create({
        result: explodeBow,
        ingredients: {
            S: sword,
            T: tnt
        },
        shape: [
            "STS",
            "TST",
            "STS"
        ]
    });

    server.addRecipe(HunterKnife);
