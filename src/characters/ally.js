import Character from './character'
import Body from './body'

export default class Ally extends Character {
    constructor(scene, x, y, width) {
        super(scene)

        super.add(new Body(scene, x, y, Math.floor(Math.random() * 6), width))
    }
}