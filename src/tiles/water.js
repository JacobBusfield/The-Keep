import Tile from './tile'

export default class Water extends Tile {
    constructor(scene, x, y) {
        super(scene, x, y, 'tile_water', 0)
    }

    create() {}

    update() {
        super.update()
    }
}