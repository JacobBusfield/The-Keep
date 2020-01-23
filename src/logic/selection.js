export default class Selection {
	constructor(tiles) {
		this.selectedTile = null
		this.tiles = tiles
	}

	select(tile, object) {
		if ((!tile) || (this.tile === tile)) {
			this.tile = null
			this.removeStyling()
			return
		}

		this.tile = tile
		this.addStyling(object)
	}

	removeStyling() {
		for (let tile of this.tiles.children.entries) {
			tile.overlay('none')
		}
	}

	addStyling(object) {
		//TODO: add logic for working out how to style grid.


		// FIXME: temp - just add styling to clicked block.
		for (let tile of this.tiles.children.entries) {
			tile.overlay('none')
		}
		this.tile.overlay('selection')
	}
}