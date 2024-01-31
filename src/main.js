/*
Mahir Camci
Modified Rocket Patrol
it took me about 6 hours
Mahir Camci

 - Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
 - Implement a new timing/scoring mechanism that adds time (+1s) to the clock for successful hits and subtracts time (-4)for misses (5)
 - Display the time remaining (in seconds) on the screen (3)
 - Randomize each spaceship's movement direction at the start of each play (1)
 - Allow the player to control the Rocket after it's fired (1)
 - Implement mouse control for player movement and left mouse click to fire (5)
 - Added in-game restart and go back to Menu (for fun)
 - Added toggle mouse on and off in the menu (for fun)
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play]
}


let game = new Phaser.Game(config)

let keyFIRE, keyRESET, keyLEFT, keyRIGHT, mouseLeft, keyMouse, menuConfig, keyQUIT

let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

