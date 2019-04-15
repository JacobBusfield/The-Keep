import Tile from './tile'

export default class Grass extends Tile {
    constructor(scene, x, y) {
        super(scene, x, y, 'tile_grass', 0)
    }

    create() {}

    update(){
        super.update()
    }
}