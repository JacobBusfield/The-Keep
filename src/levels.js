import Grass from './tiles/grass'
import Wall from './tiles/wall'

export default class Levels {
    constructor() {

    }

    get(no){
        let tiles = []
        switch(no){
            case 1:
                tiles = [
                    [Grass, Grass, Wall],
                    [Grass, Grass, Wall],
                    [Grass, Grass, Wall],
                ]
                break;
            case 2:
                tiles = [
                    [Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Wall, Grass],
                    [Grass, Grass, Grass, Wall, Grass],
                    [Grass, Grass, Grass, Wall, Grass],
                ]
                break;
            default:
                tiles = [
                    [Grass, Grass, Grass, Wall, Grass, Grass, Grass],
                    [Grass, Wall, Wall, Wall, Wall, Wall, Grass],
                    [Grass, Wall, Grass, Wall, Grass, Wall, Grass],
                    [Grass, Wall, Grass, Grass, Grass, Wall, Grass],
                    [Grass, Wall, Grass, Grass, Grass, Wall, Grass],
                    [Grass, Wall, Wall, Wall, Wall, Wall, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                ]
                tiles = [
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Wall, Wall, Wall, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Grass, Wall, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Grass, Grass, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Grass, Grass, Grass, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Wall, Wall, Wall, Wall, Wall, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass, Grass],
                ]
        }
        
        return tiles
    }
}