export function findNeighbors( grid, row, col ) {
	const maxRow = grid.length;
	const maxCol = grid[0].length;
	let cells = [];

	for( let rowModifier = -1; rowModifier <= 1; rowModifier++ ) {
		const rowIndex = row + rowModifier;
		if ( rowIndex < 0 || rowIndex >= maxRow ) {
			continue;
		}
		for( let colModifier = -1; colModifier <= 1; colModifier++ ) {
			const colIndex = col + colModifier;
			if ( colIndex < 0 || colIndex >= maxCol || ( colIndex === col && rowIndex === row ) ) {
				continue;
			}
			cells.push( grid[rowIndex][colIndex] );
		}
	}

	return cells;
}
