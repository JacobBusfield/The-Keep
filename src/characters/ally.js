import Character from './character'
import Body from './body'
import Bottom from './bottom'
import Top from './top'
import Hair from './hair'

export default class Ally extends Character {
    constructor(scene, x, y, width) {
        super(scene)

        super.add(new Body(scene, x, y, Math.floor(Math.random() * 6), width))
        super.add(new Bottom(scene, x, y, Math.floor(Math.random() * 10), width))
        super.add(new Top(scene, x, y, Math.floor(Math.random() * 120), width))
        super.add(new Hair(scene, x, y, Math.floor(Math.random() * 72), width))
    }
}