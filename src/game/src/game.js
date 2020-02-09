import { Application } from '@pixi/app'
import Tilemap from './render/tilemap';
import Camera from './render/camera';
class Game {
  constructor() {
    this.app = this.createView()
    document.body.appendChild(this.app.view);
  }
  createView() {
    const app = new Application({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      transparent: false,
      resolution: 1
    })
    window.addEventListener('resize', this.resize.bind(this));
    return app
  }
  resize() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight)
    if(this.tilemap)
      this.tilemap.resize()
  }
  initCamera() {
    this.camera = new Camera()
  }
  renderMap() {
    this.tilemap = new Tilemap(80)
  }
}

export const game = new Game()
