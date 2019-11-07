import {
    GameObjects
} from 'phaser'

export default class Shield extends GameObjects.Sprite {
    constructor(scene, x, y, frame, width) {
        super(scene, x, y, "shields", frame)

        this.setScale(width / 64)
        this.setOrigin(0.5, 0.75)
    }
}