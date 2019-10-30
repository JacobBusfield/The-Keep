import Tile from './tile'

export default class Beach extends Tile {
    constructor(scene, x, y) {
        super(scene, x, y, 'tile_beach', 0)
    }

    create() {}

    update() {
        super.update()
    }
}