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
                tiles = [
                    [Grass, Grass, Wall],
                    [Grass, Grass, Wall],
                    [Grass, Grass, Wall],
                ]
                break;
            case 2:
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
                tiles = this.generateRandom()
        }

        return tiles
    }

    generateRandom() {
        let tiles = []

        let water_row_margin_lower = Math.floor(Math.random() * 5) + 2
        let water_row_margin_upper = 19 - water_row_margin_lower
        let water_col_margin_lower = Math.floor(Math.random() * 5) + 2
        let water_col_margin_upper = 19 - water_col_margin_lower

        let row_count = 0
        let col_count = 0
        while (col_count < 20) {
            let row = []
            while (row_count < 20) {
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