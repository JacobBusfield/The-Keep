import {
    GameObjects
} from 'phaser'

export default class Tile extends GameObjects.Sprite {
    constructor(scene, selection, x, y, texture, frame, width) {
        super(scene, x, y, texture, frame)

        this.selection = selection
        this.overlayType = 'none'
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
        this.setTint("0x999999")
        if (this.object) {
            console.log(this.object.name)
        }
    }
    pointerout() {
        this.setOverlay()
    }
    pointerup() {
        // TODO: started click response. needs finishing.

        if (this.object) {
            console.log("clicked: " + this.object.name)
            this.selection.select(this)
        } else {
            console.log("clicked: NOTHING")
            this.selection.select(null)
        }
    }

    worldChange(neighbours, object) {
        this.object = object
        // lets state of a tile update using global tiles
    }

    overlay(type) {
        this.overlayType = type
        this.setOverlay()
    }

    setOverlay() {
        switch (this.overlayType) {
            case 'selection':
                this.setTint("0x555555")
                break
            case 'none':
            default:
                this.clearTint()
        }
    }
}