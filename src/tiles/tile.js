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
                this.pointerover()
            })
            .on('pointerout', () => {
                this.pointerout()
            })
            .on('pointerup', () => {
                this.pointerup()
            })

        this.object = null
        this.scene = scene
    }

    pointerover() {
        this.setTint("0x555555")
        if (this.object) {
            console.log(this.object.name)
        }
    }
    pointerout() {
        this.clearTint()
    }
    pointerup() {
        // TODO: started click response. needs finishing.

        if (this.object) {
            this.setTint("0x111111")
            console.log("clicked: " + this.object.name)
        } else {
            console.log("clicked: NOTHING")
        }
    }

    worldChange(neighbours, object) {
        this.object = object
        // lets state of a tile update using global tiles
    }
}