import Grass from './tiles/grass'
import Water from './tiles/water'
import Beach from './tiles/beach'
import Tree from './tiles/tree'
import Wall from './tiles/wall'

export default class Levels {
    constructor() {

    }

    get(no) {
        let tiles = []
        switch (no) {
            case 1:
                tiles = this.generateRandom(8)
                break;
            case 2:
                tiles = this.generateRandom(14)
                break;
            case 3:
                tiles = this.generateRandom(20)
                break;
            case 4:
                tiles = [
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Wall, Wall, Wall, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Grass, Wall, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Grass, Grass, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Grass, Grass, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Wall, Wall, Wall, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Tree, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Water, Water, Water],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Water, Water, Water],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Water, Water, Water],
                ]
                break;
            default:
                tiles = this.generateRandom(20)
        }

        return tiles
    }

    generateRandom(row_col_length) {
        let tiles = []

        let water_row_margin_lower = Math.floor(Math.random() * (row_col_length / 4)) + 1
        let water_row_margin_upper = (row_col_length - 1) - water_row_margin_lower
        let water_col_margin_lower = Math.floor(Math.random() * (row_col_length / 4)) + 1
        let water_col_margin_upper = (row_col_length - 1) - water_col_margin_lower

        let row_count = 0
        let col_count = 0
        while (col_count < row_col_length) {
            let row = []
            while (row_count < row_col_length) {
                if (
                    (col_count < water_col_margin_lower) ||
                    (col_count > water_col_margin_upper) ||
                    (row_count < water_row_margin_lower) ||
                    (row_count > water_row_margin_upper)
                ) {
                    row.push(Water)
                } else if (
                    (col_count === water_col_margin_lower) ||
                    (col_count === water_col_margin_upper) ||
                    (row_count === water_row_margin_lower) ||
                    (row_count === water_row_margin_upper)
                ) {
                    row.push(Beach)
                } else {
                    row.push(Grass)
                }
                row_count += 1
            }
            tiles.push(row)
            col_count += 1
            row_count = 0
        }
        return tiles
    }
}