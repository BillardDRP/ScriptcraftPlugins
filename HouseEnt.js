'use strict'

var Drone = require('drone'),
    blocks = require('blocks');

function HouseEnt() {
  this.box0("5",8,4,8)
      .box("1",1,1,1)
      .up(4)
      .prisim("5",8,4);
    };
Drone.extend(HouseEnt)
