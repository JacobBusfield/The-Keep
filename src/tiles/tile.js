import {
    GameObjects
} from 'phaser'

export default class Tile extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, width) {
        super(scene, x, y, texture, frame)

        this.setScale(width / 64)
        this.setInteractive(
                new Phaser.Geom.Polygon([0, 32, 32, 13, 64, 32, 32, 50, 0, 32]),
                Phaser.Geom.Polygon.Contains
            )
            .on('pointerover', () => {
                this.setTint("0x555555")
            })
            .on('pointerout', () => {
                this.clearTint()
            })
            .on('pointerup', () => {})
    }

    create() {}

    update() {}

    worldChange(neighbours) {
        // lets state of a tile update using global tiles
    }
}