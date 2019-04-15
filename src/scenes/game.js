import { Scene } from 'phaser'
import Person from '../objects/person'
import Tiles from '../tiles/tiles'

export default class Game extends Scene {
    constructor() {
        super('game')
    }

    preload() {}

    create() {

        // let config = {
        //     key: 'engineer_walk_down',
        //     frames: this.anims.generateFrameNumbers('engineer', {
        //         start: 0,
        //         end: 3
        //     }),
        //     repeat: -1,
        //     frameRate: 5
        // }

        // this.anims.create(config)
        // let person = new Person(this, 100, 100, 'engineer', 0)
        // this.add.existing(person)
        // person.anims.play('engineer_walk_down')

        this.tiles = new Tiles(this)
        this.tiles.init(3)
        console.log("tiles")
        console.log(this.tiles)
    }

    update(delta){
        this.tiles.update()
    }
}
