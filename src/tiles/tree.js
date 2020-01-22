import Tile from './tile'

export default class Tree extends Tile {
    constructor(scene, x, y, width) {
        super(scene, x, y, 'tile_tree', 0, width)
    }

    worldChange(neighbours, object) {
        super.worldChange(neighbours, object)
    }
}