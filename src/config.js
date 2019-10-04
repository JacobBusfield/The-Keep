import Boot from './scenes/boot'
import Preload from './scenes/preload'
import Game from './scenes/game'
import {
    Scale
} from 'phaser'

export default {
    width: 1500,
    height: 900,
    backgroundColor: 'rgba(0, 0, 0)',
    scene: [Boot, Preload, Game],
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
}