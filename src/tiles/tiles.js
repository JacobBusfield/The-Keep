import Levels from '../levels'
import {
    GameObjects
} from 'phaser'


export default class Tiles extends GameObjects.Group {
    constructor(scene) {
        super(scene)
        this.scene = scene // TODO: DO I NEED TO SAVE THIS SCENE? Can i grab it from the group?
        this.levels = new Levels()
        this.tileWidth = 65
        this.rowLength = 0
    }

    init(selection, level) {
        let tiles = this.levels.get(level)

        this.rowLength = tiles[0].length
        this.tileWidth = (1300 / this.rowLength) + 1

        let startX = this.scene.game.canvas.width / 2
        let startY = (this.scene.game.canvas.height * 0.5) - ((this.tileWidth / 4) * this.rowLength)

        for (let i = 0; i < tiles.length; i++) {
            let tileX = startX
            let tileY = startY
            for (let j = tiles[i].length - 1; j >= 0; j--) {
                let toAdd = new tiles[i][j](this.scene, selection, tileX, tileY, this.tileWidth)
                this.scene.add.existing(toAdd)
                super.add(toAdd)
                tileX -= this.tileWidth * 0.5
                tileY += this.tileWidth * 0.29 // number is from ratio of tile face height to image height
            }
            startX += this.tileWidth * 0.5
            startY += this.tileWidth * 0.29 // number is from ratio of tile face height to image height
        }
    }

    // Go thru' tiles and update their appearance based on other tiles.
    updateWorld(objects) {
        for (let i in this.children.entries) {
            this.children.entries[i].worldChange(
                this.getNeighbourIndexes(parseInt(i)),
                objects.find(o => o.tile === this.children.entries[i])
            )
        }
    }

    getNeighbourIndexes(index) {
        return {
            'NE': (index % this.rowLength !== this.children.entries.length - 1) ? this.children.entries[(index - 1)] : null,
            'SW': (index % this.rowLength !== 0) ? this.children.entries[(index + 1)] : null,
            'SE': ((index + this.rowLength) <= this.children.entries.length) ? this.children.entries[(index + this.rowLength)] : null,
            'NW': ((index - this.rowLength) >= 0) ? this.children.entries[(index - this.rowLength)] : null
        }
    }
}