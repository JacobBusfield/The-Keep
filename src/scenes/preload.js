import {
    Scene
} from 'phaser'

export default class Preload extends Scene {
    constructor() {
        super('preload')
    }

    preload() {
        // Tiles
        this.load.image('tile_grass', require('../assets/tiles/grass.png'));
        this.load.image('tile_beach', require('../assets/tiles/beach.png'));
        this.load.image('tile_water', require('../assets/tiles/water.png'));
        this.load.image('tile_tree', require('../assets/tiles/tree.png'));
        this.load.image('tile_wall_A', require('../assets/tiles/wall_A.png'));
        this.load.image('tile_wall_B', require('../assets/tiles/wall_B.png'));
        this.load.image('tile_wall_C', require('../assets/tiles/wall_C.png'));
        this.load.image('tile_wall_D', require('../assets/tiles/wall_D.png'));
        this.load.image('tile_wall_E', require('../assets/tiles/wall_E.png'));
        this.load.image('tile_wall_F', require('../assets/tiles/wall_F.png'));
        this.load.image('tile_wall_G', require('../assets/tiles/wall_G.png'));
        this.load.image('tile_wall_H', require('../assets/tiles/wall_H.png'));
        this.load.image('tile_wall_I', require('../assets/tiles/wall_I.png'));
        this.load.image('tile_wall_J', require('../assets/tiles/wall_J.png'));
        this.load.image('tile_wall_X', require('../assets/tiles/wall_X.png'));

        // Characters
        this.load.spritesheet('bodies', require('../assets/characters/bodies.png'), {
            frameWidth: 32,
            frameHeight: 34,
            endFrame: 8
        });
    }

    create() {
        this.scene.start('title')
    }
}