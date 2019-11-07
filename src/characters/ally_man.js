import Ally from './ally'

export default class AllyMan extends Ally {
    constructor(scene, x, y, width) {
        super(scene, x, y, "bodies", Math.floor(Math.random() * 6), width)
    }

    create() {
        super.create()
    }

    update() {
        super.update()
    }
}