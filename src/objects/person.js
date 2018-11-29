import { GameObjects } from 'phaser'

export default class Person extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
    }

    create() {
        console.log('Created person')
    }
}
