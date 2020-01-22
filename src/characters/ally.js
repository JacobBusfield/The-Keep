import Character from './character'
import Body from './body'
import Bottom from './bottom'
import Top from './top'
import Hair from './hair'
import Shield from './shield'
import Weapon from './weapon'

export default class Ally extends Character {
    constructor(scene, tile, width) {
        super(scene)
        super.init(tile)

        super.add(new Body(scene, tile.x, tile.y, Math.floor(Math.random() * 6), width))
        super.add(new Bottom(scene, tile.x, tile.y, Math.floor(Math.random() * 10), width))
        super.add(new Top(scene, tile.x, tile.y, Math.floor(Math.random() * 120), width))
        super.add(new Hair(scene, tile.x, tile.y, Math.floor(Math.random() * 72), width))

        if (Math.floor(Math.random() * 4) >= 1) {
            super.add(new Weapon(scene, tile.x, tile.y, Math.floor(Math.random() * 16), width))
        }

        if (Math.floor(Math.random() * 10) >= 1) {
            super.add(new Shield(scene, tile.x, tile.y, Math.floor(Math.random() * 72), width))
        }

        this.name = this.getRandomName()
    }

    move(tile) {
        super.move(tile)
    }

    getRandomName() {
        let firstNameBank = [
            "Ta",
            "Eilene",
            "Keri",
            "Larisa",
            "Jonas",
            "Bobbi",
            "Carroll",
            "Emely",
            "Leone",
            "Roxy",
            "Kiley",
            "Lin",
            "Alfreda",
            "Myriam",
            "Cedric",
            "Arlena",
            "Clare",
            "Precious",
            "Karri",
            "Dakota",
            "Charisse",
            "Mirta",
            "Jan",
            "Allyn",
            "Jackie",
            "Hershel",
            "Gema",
            "Elmira",
            "Jeana",
            "Orville",
            "Rosalyn",
            "Latoria",
            "Zena",
            "Samella",
            "Hedy",
            "Carolee",
            "Vilma",
            "Antionette",
            "Frances",
            "Teodoro",
            "Olympia",
            "Lorine",
            "Thomasine",
            "Sherlene",
            "Malcom",
            "Octavio",
            "Mariel",
            "Marti",
            "Cassy",
            "Devona",
        ]

        return firstNameBank[Math.floor(Math.random() * firstNameBank.length)]
    }
}