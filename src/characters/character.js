import {
    GameObjects
} from 'phaser'

export default class Character extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, width) {
        super(scene, x, y, texture, frame)

        this.setScale(width / 64)
        this.setOrigin(0.5, 0.85)
    }

    create() {}

    update() {}
}