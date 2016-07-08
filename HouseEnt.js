'use strict'

var Drone = require('drone'),
    blocks = require('blocks')
    sounds = require('sounds');

function HouseEnt() {
  this.box0("5",8,4,8)
      .box("1",1,1,1)
      .up(4)
      .box("1",8,1,8)
      .box("5",1,1,1)
      .right(3)
      .down(6)
      .door();
      // sounds.successful_hit();
  // sounds.play(BLOCK_WOOD_PRESSUREPLATE_CLICK_ON,self);
    };
Drone.extend(HouseEnt)
