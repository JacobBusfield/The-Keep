import Tile from './tile'

export default class Tree extends Tile {
    constructor(scene, selection, x, y, width) {
        super(scene, selection, x, y, 'tile_tree', 0, width)
    }

    worldChange(neighbours, object) {
        super.worldChange(neighbours, object)
    }
}