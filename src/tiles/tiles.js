import Levels from '../levels'
import { GameObjects } from 'phaser'


export default class Tiles extends GameObjects.Group {
    constructor(scene) {
        super(scene)
        this.scene = scene // TODO: DO I NEED TO SAVE THIS SCENE? Can i grab it from the group?
        this.levels = new Levels()
        this.tileHeight = 112
        this.tileWidth = 155
    }

    update(){
        this.getChildren().forEach(function(item){
            item.update()
        }, this)
    }
    
    init(level){
        console.log("tiles created")
        let tiles = this.levels.get(1)

        // TODO: change anchor point!

        let startX = this.scene.game.canvas.width / 2
        let startY = (this.scene.game.canvas.height / 2) - ((this.tileHeight/2)*(Math.log(tiles.length) / Math.log(2)))
        for (let i = 0; i < tiles.length; i++){
            let tileX = startX
            let tileY = startY
            for (let j = tiles[i].length - 1; j >= 0; j--){
                let a = new tiles[i][j](this.scene, tileX, tileY)
                this.scene.add.existing(a) 
                super.add(a)
                tileX -= this.tileWidth/2
                tileY += this.tileHeight/2
            }
            startX += this.tileWidth/2
            startY += this.tileHeight/2
        }
    }
}