'use strict'
var Drone = require('drone'),
    blocks = require('blocks');
    // Function 1 start- Sniper emblem
    function art1(){
        this.cylinder(blocks.wool.yellow,10,1)
            .box("1",1,1,1)
            .fwd(2)
            .right(2)
            .cylinder0(blocks.wool.red,8,1)
            .fwd(8)
            .box(blocks.wool.red,16,1,1)
            .right(8)
            .back(8)
            .box(blocks.wool.red,1,1,16);
          }
Drone.extend(art1)
// Activates drone
