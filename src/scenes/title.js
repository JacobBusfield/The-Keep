import {
    Scene
} from 'phaser'
import {
    TextButton
} from '../ui/button';

export default class Title extends Scene {
    constructor() {
        super('title')
    }

    preload() {}

    create() {
        this.title = this.add.text(100, 100, 'The Keep', {
            font: "bold 32px Arial",
            fill: "#fff"
        })

        this.title_button_small = new TextButton(
            this,
            100,
            200,
            'Small', {
                font: "bold 32px Arial",
                fill: '#0f0'
            },
            () => this.scene.start('game', {
                level: 1
            })
        );
        this.title_button_medium = new TextButton(
            this,
            300,
            200,
            'Medium', {
                font: "bold 32px Arial",
                fill: '#0f0'
            },
            () => this.scene.start('game', {
                level: 2
            })
        );
        this.title_button_big = new TextButton(
            this,
            500,
            200,
            'Large', {
                font: "bold 32px Arial",
                fill: '#0f0'
            },
            () => this.scene.start('game', {
                level: 3
            })
        );
    }
}