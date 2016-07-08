'use strict'
    // fetch databases
var Drone = require('drone'),
    blocks = require('blocks')
    sounds = require('sounds');

    function bt() {
      this.up(1)
          .box0("98",10,4,6)
          .right(2)
          .door()
          .right(5)
          .door()
          .fwd(1)
          .left(4)
          .down(1)
          .box("5",7,1,4)
          .right(1)
          .up(1)
          .fwd(4)
          .ladder(4)
          .right(3)
          .ladder(4)
          .back(1)
          .left(1)
          .box("145",1,1,1)
          .left(1)
          .box("61",1,1,1)
          .left(1)
          .box(blocks.furnace,1,1,1);
    };

    Drone.extend(bt)
