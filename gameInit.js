'use strict'
var Drone = require('drone'),
    blocks = require('blocks'),
    sounds = require('sounds');

var randChoose1,
    randChoose2,
    hunterName,
    detectveName;

var allPlayers = [],
    deadList = []


// var
// nts: find way to put all players in an array
function execCommand( command ){
        server.executeVanillaCommand(server, command);
}

function HunterGame(){
  // arenaspawn here
  // init players
    execCommand("gamemode @a a")
    execCommand("effect");
    execCommand("title");
    execCommand("title");
    execCommand("title");
}

function deathSpec(event){
  var person = person.event;
    execCommand("gamemode @p sp")
    execCommand("stfu @p")
    
}
events.playerDeath()
