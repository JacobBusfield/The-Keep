import Grass from './tiles/grass'
import Coast from './tiles/coast'

export default class Levels {
    constructor() {

    }

    get(no){
        let tiles = []
        console.log("no")
        console.log(no)
        switch(no){
            case 1:
                tiles = [
                    [Grass, Grass, Coast],
                    [Grass, Grass, Coast],
                    [Grass, Grass, Coast],
                ]
                break;
            case 2:
                tiles = [
                    [Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Coast],
                ]
                break;
            default:
                tiles = [
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                    [Grass, Grass, Grass, Grass, Grass, Grass, Coast],
                ]
        }
        
        return tiles
    }
}