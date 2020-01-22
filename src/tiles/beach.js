import Tile from './tile'

export default class Beach extends Tile {
    constructor(scene, x, y, width) {
        super(scene, x, y, 'tile_beach', 0, width)
    }

    worldChange(neighbours, object) {
        super.worldChange(neighbours, object)
    }
}