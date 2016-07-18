'use strict'
// general settings to fetch drone sounds and block databases
var Drone = require('drone'),
    blocks = require('blocks')
    sounds = require('sounds');
    // function start
    function EntLighthouse("block",radius,height){
      // customization start
      // set radius
        if (typeof radius=='undefined') {
            radius=4; // default radius
      // set height
      }
        if (typeof height=='undefined') {
            height=30; // default height
    }
    // set blocktype
        if (typeof block=='undefined') {
            block=98; //default block: stone bricks
  }
    // End customization, start build:
      this.cylinder0("block",radius,height);
          

    };
    Drone.extend(EntLighthouse)
