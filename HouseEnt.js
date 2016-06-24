'use strict'

var Drone = require('drone'),
    blocks = require('blocks')
    sounds = require('sounds');

function HouseEnt() {
  this.box0("5",8,4,8)
      .box("1",1,1,1)
      .up(4)
      .prisim("5",8,4)
      sounds.successful_hit();
  // sounds.play(BLOCK_WOOD_PRESSUREPLATE_CLICK_ON,self);
    };
Drone.extend(HouseEnt)
