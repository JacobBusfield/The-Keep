import Character from './character'
import Body from './body'
import Top from './top'

export default class Ally extends Character {
    constructor(scene, x, y, width) {
        super(scene)

        super.add(new Body(scene, x, y, Math.floor(Math.random() * 6), width))
        super.add(new Top(scene, x, y, Math.floor(Math.random() * 120), width))
    }
}