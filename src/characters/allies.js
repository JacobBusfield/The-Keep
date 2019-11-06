import {
    GameObjects
} from 'phaser'
import AllyMan from './ally_man'
import Water from '../tiles/water'

export default class Allies extends GameObjects.Group {
    constructor(scene) {
        super(scene)
        this.tileWidth = 64
    }

    update() {
        this.getChildren().forEach(function (item) {
            item.update()
        }, this)
    }

    init(tiles) {
        //TODO: switch player generation
        //TODO: Nice to get that "round select an upgrade or new champion in"

        this.tileWidth = tiles.tileWidth

        for (let tile of tiles.children.entries) {
            if (!(tile instanceof Water)) {
                this.spawn("man", tile.x, tile.y)
                break
            }
        }
    }

    spawn(type, x, y) {
        //TODO: switch on type.

        let toAdd = new AllyMan(this.scene, x, y, this.tileWidth)
        this.scene.add.existing(toAdd)
        super.add(toAdd)
    }
}