import { GameObjects } from 'phaser'

export default class Tile extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
    }

    create() {
        console.log('Created tile')
    }

    update(){
        
        // todo.
    }

    worldChange(neighbours){
        // lets state of a tile update using global tiles
    }
}