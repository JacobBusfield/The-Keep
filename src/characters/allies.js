import {
    GameObjects
} from 'phaser'
import Ally from './ally'
import Beach from '../tiles/beach'

export default class Allies extends GameObjects.Container {
    constructor(scene) {
        super(scene)
        this.tileWidth = 64

        this.scene.add.existing(this)
    }

    init(tiles) {
        this.tileWidth = tiles.tileWidth

        for (let tile of tiles.children.entries) {
            if (tile instanceof Beach) {
                this.spawn(tile)
            }
        }
    }

    spawn(tile) {
        super.add(new Ally(this.scene, tile, this.tileWidth))
    }
}