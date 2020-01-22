import {
    GameObjects
} from 'phaser'

export default class Character extends GameObjects.Container {
    constructor(scene) {
        super(scene)
        this.tile = null
    }

    init(tile) {
        this.tile = tile
    }

    move(tile) {
        this.tile = tile
    }
}