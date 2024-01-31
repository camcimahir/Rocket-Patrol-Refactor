class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, speed) {
        super(scene, x, y, texture, frame)

        this.direction = Math.floor(Math.random() * 2);
        if (this.direction == 1){
            this.setFlipX(true)
            this.x = game.config.width - x
        }
        scene.add.existing(this)     // add to existing scene
        this.points = pointValue     // store point value
        this.moveSpeed = game.settings.spaceshipSpeed * speed         // spaceship speed in pixels/frame

    }


    update() {
        // move spaceship left
        if(this.direction == 1){
            this.x += this.moveSpeed

            // wrap from left to right edge
            if (this.x >= game.config.width - this.width) {
                this.x = 0
            }
        }else {
            this.x -= this.moveSpeed

            // wrap from left to right edge
            if (this.x <= 0 - this.width) {
                this.x = game.config.width
            }
        }
    }

    reset() { 
        if (this.direction == 1){
            this.x = 0
        }
        this.x = game.config.width
    }



}