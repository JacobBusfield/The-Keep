import { Scene } from 'phaser'

export default class Preload extends Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.spritesheet('engineer', '/images/Engineer.png', { frameWidth: 32, frameHeight: 32, endFrame: 16 });
        this.load.image('tile_grass', '/images/tiles/grass.png');
        this.load.image('tile_coast_SE', '/images/tiles/coast_SE.png');
    }

    create() {
        console.log('preload started')
        this.scene.start('game')
    }
}

