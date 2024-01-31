class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene") 
    }

    preload() {
        //preload sprite
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('smallSpaceship', './assets/smallSpaceship.png')
        this.load.image('starfield', './assets/starfield.png')
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
        // load audio
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
    }

    create() {

        //animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        })

        menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }
        game.settings = {
          mouseEnabled: false
        }

        // display menu text
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding)*2, 'ROCKET PATROL', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'Use ←→ arrows to move (F) to fire', menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '19px'
        this.add.text(game.config.width/2, game.config.height/2, 'Press Q in game to restart and M to go back to Menu', menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '28px'
        menuConfig.backgroundColor = '#DC143C'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press M to include Mouse (easier)', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5)
      
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyMouse = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
    }


    update() {


        if (Phaser.Input.Keyboard.JustDown(keyMouse)){
          game.settings.mouseEnabled = !(game.settings.mouseEnabled)
        }

        // change background color if M is pressed
        if (game.settings.mouseEnabled){
          menuConfig.backgroundColor = '#00FF00'
          this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press M to include Mouse (easier)', menuConfig).setOrigin(0.5)
        } else {
          menuConfig.backgroundColor = '#DC143C'
          this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press M to include Mouse (easier)', menuConfig).setOrigin(0.5)
        }


        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            mouseEnabled: game.settings.mouseEnabled,
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            mouseEnabled: game.settings.mouseEnabled,
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx-select')
          this.scene.start('playScene')    
        }
    }
}

