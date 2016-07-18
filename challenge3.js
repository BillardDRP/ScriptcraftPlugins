'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds');

function c3(){
  for(var i=0; i<4; i++){
    this.box0("5",5,5,5)
        .right(3)
        .door()
        .up(4)
        .left(3)
        .box("5",5,1,5)
        .down(3)
        .right(1)
        .box("20",1,1,1)
        .right(3)
        .box("20",1,1,1)
        .fwd(7)
        .box("1",1,1,1);
      };
};
Drone.extend(c3)
