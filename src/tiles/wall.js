import Tile from './tile'

export default class Wall extends Tile {
    constructor(scene, x, y, isWallNE = false, isWallSE = false, isWallSW = false, isWallNW = false) {
        super(scene, x, y, 'tile_wall_O', 0)
        this.updateNeighbours()
        // console.log("this.isWallNE", this.isWallNE)
    }

    create() {
        console.log('Created wall')
    }

    update(){
        super.update()
        // this.x += 1
    }

    worldChange(neighbours){
        console.log(neighbours)
        this.updateNeighbours(
            neighbours.NE instanceof Wall,
            neighbours.SE instanceof Wall,
            neighbours.SW instanceof Wall,
            neighbours.NW instanceof Wall,
        )
    }

    updateNeighbours(isWallNE = false, isWallSE = false, isWallSW = false, isWallNW = false){
        this.isWallNE = isWallNE
        this.isWallSE = isWallSE
        this.isWallSW = isWallSW
        this.isWallNW = isWallNW

        console.log("isWallNE", isWallNE)
        console.log("isWallSE", isWallSE)
        console.log("isWallSW", isWallSW)
        console.log("isWallNW", isWallNW)

        if (!isWallNE && isWallSE && !isWallSW && isWallNW){
            super.setTexture('tile_wall_A');
        } else if (isWallNE && !isWallSE && isWallSW && !isWallNW) {
            super.setTexture('tile_wall_B');
        } else if (!isWallNE && !isWallSE && !isWallSW && isWallNW) {
            super.setTexture('tile_wall_C');
        } else if (!isWallNE && isWallSE && !isWallSW && !isWallNW) {
            super.setTexture('tile_wall_D');
        } else if (!isWallNE && !isWallSE && isWallSW && !isWallNW) {
            super.setTexture('tile_wall_E');
        } else if (isWallNE && !isWallSE && !isWallSW && !isWallNW) {
            super.setTexture('tile_wall_F');
        } else if (!isWallNE && isWallSE && isWallSW && !isWallNW) {
            super.setTexture('tile_wall_G');
        } else if (isWallNE && isWallSE && !isWallSW && !isWallNW) {
            super.setTexture('tile_wall_H');
        } else if (isWallNE && !isWallSE && !isWallSW && isWallNW) {
            super.setTexture('tile_wall_I');
        } else if (!isWallNE && !isWallSE && isWallSW && isWallNW) {
            super.setTexture('tile_wall_J');
        } else if (isWallNE && isWallSE && isWallSW && isWallNW) {
            super.setTexture('tile_wall_X');
        } else {
            super.setTexture('tile_wall_O');
        }
    }
}