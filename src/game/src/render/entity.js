import { game } from '../game';
const PIXI = require('pixi.js')

class Entity {
    constructor() {
        this.x = Math.random() * game.app.screen.width
        this.y = Math.random() * game.app.screen.height
        
        this.draw()
        this.loop()
    }
    draw() {
        this.graphics = new PIXI.Graphics();
        game.app.stage.addChild(this.graphics)
        this.graphics.beginFill(0x777777);
        this.graphics.drawRect(this.x, this.y , 20, 60);
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this))
        this.graphics.position.x += 5
    }

}

export default Entity