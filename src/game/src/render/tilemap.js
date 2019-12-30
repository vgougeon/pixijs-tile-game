import { game } from '../game';
const PIXI = require('pixi.js')
class Tilemap {
    constructor(size) { 
        this.size = size
        this.drawGrid()
        this.loop()
    }
    drawGrid() {
        //Get width and height of screen
        this.container = new PIXI.Container()
        game.app.stage.addChild(this.container)
        const graphics = new PIXI.Graphics();
        this.container.addChild(graphics);
        let color = [0x151515, 0x000000];
        for(let i = 0; i < game.app.screen.width; i = i + this.size){
            for(let j = 0; j < game.app.screen.height; j = j + this.size) {
                graphics.beginFill(color[(i+j)/this.size % 2]);
                graphics.drawRect(i, j, this.size, this.size);

                const textPosition = new PIXI.Text(i / this.size + ' : ' + j / this.size ,{fontFamily: 'Arial light', fontSize: 12, fill : 0x333333, align : 'center'});

                textPosition.position.x = i + 4
                textPosition.position.y = j + 2
                this.container.addChild(textPosition);
            }
        }
        this.container.scale.x = 1
        this.container.scale.y = 1
    }
    resize() {
        this.drawGrid()
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this))
        // this.drawGrid()
    }
}
export default Tilemap