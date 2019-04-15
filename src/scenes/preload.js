import { Scene } from 'phaser'

export default class Preload extends Scene {
    constructor() {
        super('preload')
    }

    preload() {
        // this.load.spritesheet('engineer', '/images/Engineer.png', { frameWidth: 32, frameHeight: 32, endFrame: 16 });
        this.load.image('tile_grass', '/images/tiles/grass.png');
        this.load.image('tile_wall_A', '/images/tiles/wall_A.png');
        this.load.image('tile_wall_B', '/images/tiles/wall_B.png');
        this.load.image('tile_wall_C', '/images/tiles/wall_C.png');
        this.load.image('tile_wall_D', '/images/tiles/wall_D.png');
        this.load.image('tile_wall_E', '/images/tiles/wall_E.png');
        this.load.image('tile_wall_F', '/images/tiles/wall_F.png');
        this.load.image('tile_wall_G', '/images/tiles/wall_G.png');
        this.load.image('tile_wall_H', '/images/tiles/wall_H.png');
        this.load.image('tile_wall_I', '/images/tiles/wall_I.png');
        this.load.image('tile_wall_J', '/images/tiles/wall_J.png');
        this.load.image('tile_wall_X', '/images/tiles/wall_X.png');
    }

    create() {
        this.scene.start('game')
    }
}

