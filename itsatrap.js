'use strict'
// fetch libs
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds');

function itsatrap(event){
  var projectile = event.projectile,
      world = projectile.world,
      shooter = projectile.owner,
      cmArrow = Packages.net.canarymod.api.entity.arrow,
      cmPlayer = Packages.net.canarymod.api.entity.humanoid.player,
      loc = projectile.location;

      if(projectile instanceof cmArrow && shooter instanceof cmPlayer){
          projectile.destroy();
          new Drone(loc).up(20)
                        .box()
      }
}
