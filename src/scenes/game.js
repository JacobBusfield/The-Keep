import {
    Scene
} from 'phaser'
import {
    TextButton
} from '../ui/button'
import Tiles from '../tiles/tiles'

export default class Game extends Scene {
    constructor() {
        super('game')
    }

    preload() {}

    create() {
        this.back_button = new TextButton(
            this,
            100,
            200,
            'Back', {
                font: "bold 32px Arial",
                fill: '#0f0'
            },
            () => this.scene.start('title')
        );

        this.tiles = new Tiles(this)
        this.tiles.init(3)
    }

    update(delta) {
        this.tiles.update()
    }
}