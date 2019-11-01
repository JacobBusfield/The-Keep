import Tile from './tile'

export default class Grass extends Tile {
    constructor(scene, x, y, width) {
        super(scene, x, y, 'tile_tree', 0, width)
    }

    create() {}

    update() {
        super.update()
    }
}