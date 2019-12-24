import { Application } from '@pixi/app'
class Game {
  constructor() {
    this.app = this.createView()
    document.body.appendChild(this.app.view);
    console.log('done')
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
  }
  loop() {
  }
}

export const game = new Game()
