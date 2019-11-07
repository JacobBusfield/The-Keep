import {
    GameObjects
} from 'phaser'
import Ally from './ally'
import Water from '../tiles/water'

export default class Allies extends GameObjects.Container {
    constructor(scene) {
        super(scene)
        this.tileWidth = 64

        this.scene.add.existing(this)
    }

    init(tiles) {
        this.tileWidth = tiles.tileWidth

        for (let tile of tiles.children.entries) {
            if (!(tile instanceof Water)) {
                this.spawn(tile.x, tile.y)
                break
            }
        }
    }

    spawn(x, y) {
        super.add(new Ally(this.scene, x, y, this.tileWidth))
    }
}