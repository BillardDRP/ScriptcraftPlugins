'use strict'

var Drone = require('drone'),
    blocks = require('blocks');

function EntHouse() {
  this.box0("5",8,4,8)
      .box("1",1,1,1);
    }
Drone.extend(EntHouse)
