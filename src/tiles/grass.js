import Tile from './tile'

export default class Grass extends Tile {
    constructor(scene, x, y, width) {
        super(scene, x, y, 'tile_grass', 0, width)
    }

    worldChange(neighbours, object) {
        super.worldChange(neighbours, object)
    }
}