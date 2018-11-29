import Tile from './tile'

export default class Coast extends Tile {
    constructor(scene, x, y) {
        super(scene, x, y, 'tile_coast_SE', 0)
    }

    create() {
        console.log('Created coast')
    }

    update(){
        super.update()
        // this.x += 1
    }
}