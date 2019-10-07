import { Scene } from 'phaser'

export default class Preload extends Scene {
    constructor() {
        super('preload')
    }

    preload() {
        // this.load.spritesheet('engineer', require('../../images/Engineer.png'), { frameWidth: 32, frameHeight: 32, endFrame: 16 });
        this.load.image('tile_grass', require('../../images/tiles/grass.png'));
        this.load.image('tile_tree', require('../../images/tiles/tree.png'));
        this.load.image('tile_wall_A', require('../../images/tiles/wall_A.png'));
        this.load.image('tile_wall_B', require('../../images/tiles/wall_B.png'));
        this.load.image('tile_wall_C', require('../../images/tiles/wall_C.png'));
        this.load.image('tile_wall_D', require('../../images/tiles/wall_D.png'));
        this.load.image('tile_wall_E', require('../../images/tiles/wall_E.png'));
        this.load.image('tile_wall_F', require('../../images/tiles/wall_F.png'));
        this.load.image('tile_wall_G', require('../../images/tiles/wall_G.png'));
        this.load.image('tile_wall_H', require('../../images/tiles/wall_H.png'));
        this.load.image('tile_wall_I', require('../../images/tiles/wall_I.png'));
        this.load.image('tile_wall_J', require('../../images/tiles/wall_J.png'));
        this.load.image('tile_wall_X', require('../../images/tiles/wall_X.png'));
    }

    create() {
        this.scene.start('game')
    }
}

