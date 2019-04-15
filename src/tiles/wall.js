import Tile from './tile'

export default class Wall extends Tile {
    constructor(scene, x, y) {
        super(scene, x, y, 'tile_wall', 0)
    }

    create() {
        console.log('Created wall')
    }

    update(){
        super.update()
        // this.x += 1
    }
}