'use strict'

var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds');

function EntHouse() {
        this.up(1)
            .box0("168",7,5,8)
            .right(3)
            .down(1)
            .left(2)
            .box("168",6,1,7)
            .up(6)
            .left(1)
            .box0("20",7,1,8)
            .fwd(1)
            .up(1)
            .right(1)
            .box0(blocks.stained_glass.lime,5,1,6)
            .fwd(1)
            .right(1)
            .up(1)
            .box0(blocks.stained_glass.purple,3,1,4)
            .fwd(1)
            .right(1)
            .up(1)
            .box(blocks.stained_glass.blue,1,1,2)
            .down(8)
            .left(3)
            .back(3)
            .up(1)
            .box0("20",7,1,8)
            .right(3)
            .down(1)
            .door()
            .right(1)
            .door()
            .box("1",1,1,1)
            .fwd(1)
            .right(1)
            .box("0",6,4,7);
    };
Drone.extend(EntHouse)
