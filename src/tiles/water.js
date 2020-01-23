import Tile from './tile'

export default class Water extends Tile {
    constructor(scene, selection, x, y, width) {
        super(scene, selection, x, y, 'tile_water', 0, width)
    }

    worldChange(neighbours, object) {
        super.worldChange(neighbours, object)
    }
}