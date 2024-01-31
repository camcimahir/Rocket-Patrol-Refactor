//rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // add object to existing scene
        scene.add.existing(this)  // add to existing, displayList, updateList
        this.isFiring = false     // track rocket's firing status 
        this.moveSpeed = 2        // rocket speed in pixel/frame
        this.sfxShot = scene.sound.add('sfx-shot')
    }

    update() {
        // left/right movement  

        if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed
        }
        if (game.settings.mouseEnabled){
            this.x = game.input.mousePointer.x;            
        }

        // fire button
        if ((mouseLeft || Phaser.Input.Keyboard.JustDown(keyFIRE)) && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }

        // if fired, move up
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }

        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
        }

    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }

    miss() {
        return (this.y <= borderUISize * 3 + borderPadding + 1)
    }


}