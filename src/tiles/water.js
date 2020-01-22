import Tile from './tile'

export default class Water extends Tile {
    constructor(scene, x, y, width) {
        super(scene, x, y, 'tile_water', 0, width)
    }

    worldChange(neighbours, object) {
        super.worldChange(neighbours, object)
    }
}