import {
    Scene
} from 'phaser'
import {
    TextButton
} from '../ui/button'
import Tiles from '../tiles/tiles'
import Allies from '../characters/allies'

export default class Game extends Scene {
    constructor() {
        super('game')
    }

    preload() {}

    create(data) {
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
        this.tiles.init(data.level)

        this.allies = new Allies(this)
        this.allies.init(this.tiles)

        this.tiles.updateWorld(this.getObjects())
    }

    getObjects() {
        return this.allies.getAll()
    }
}