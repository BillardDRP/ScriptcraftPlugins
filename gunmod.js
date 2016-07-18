/*global require, server, Packages*/

var items = require("items"),
    recipes = require("recipes"),
    events = require("events");

var bow = items.bow(1),
    tnt = items.tnt(1),
    explodeBow = items.bow(1),
    nuclearBow = items.bow(1),
    cmArrow = Packages.net.canarymod.api.entity.Arrow,
    EXPLOSIVE_YIELD = 2.5,
    NUCLEAR_YIELD = 10;

explodeBow.setDisplayName("Bow of Exploding");
explodeBow.setLore("Excite. Very boom.");

var explodeBowRecipe = recipes.create({
    result: explodeBow,
    ingredients: {
        B: bow,
        T: tnt
    },
    shape: [
        "   ",
        "BT ",
        "   "
    ]
});

server.addRecipe(explodeBowRecipe);

nuclearBow.setDisplayName("Nuclear Bow");
nuclearBow.setLore("The only way to win is to not play the game.");

var nuclearBowRecipe = recipes.create({
    result: nuclearBow,
    ingredients: {
        B: bow,
        T: tnt
    },
    shape: [
        "   ",
        "TBT",
        "   "
    ]
});

server.addRecipe(nuclearBowRecipe);

function onArrowHit(event) {
    var projectile = event.projectile,
        world = projectile.world,
        loc = projectile.location,
        shooter = projectile.owner;

    if (projectile instanceof cmArrow) {
        if (shooter.inventory.itemInHand.getDisplayName() === "Bow of Exploding") {
            projectile.destroy();
            world.makeExplosion(shooter, loc, EXPLOSIVE_YIELD, true);
        } else if (shooter.inventory.itemInHand.getDisplayName() === "Nuclear Bow") {
            projectile.destroy();
            world.makeExplosion(shooter, loc, NUCLEAR_YIELD, true);
        }
    }
}

events.projectileHit(onArrowHit);
