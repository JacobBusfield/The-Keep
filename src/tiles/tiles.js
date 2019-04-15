import Levels from '../levels'
import { GameObjects } from 'phaser'


export default class Tiles extends GameObjects.Group {
    constructor(scene) {
        super(scene)
        this.scene = scene // TODO: DO I NEED TO SAVE THIS SCENE? Can i grab it from the group?
        this.levels = new Levels()
        this.tileWidth = 65
    }

    update(){
        this.getChildren().forEach(function(item){
            item.update()
        }, this)
    }
    
    init(level){
        let tiles = this.levels.get(level)
        let startX = this.scene.game.canvas.width / 2
        let startY = (this.scene.game.canvas.height / 2) - ((this.tileWidth/2)*(Math.log(tiles.length) / Math.log(2)))
        for (let i = 0; i < tiles.length; i++){
            let tileX = startX
            let tileY = startY
            for (let j = tiles[i].length - 1; j >= 0; j--){
                let toAdd = new tiles[i][j](this.scene, tileX, tileY)
                this.scene.add.existing(toAdd) 
                super.add(toAdd)
                tileX -= this.tileWidth*0.5
                tileY += this.tileWidth*0.29 // number is from ratio of tile face height to image height
            }
            startX += this.tileWidth*0.5
            startY += this.tileWidth*0.29 // number is from ratio of tile face height to image height
        }
    }
}