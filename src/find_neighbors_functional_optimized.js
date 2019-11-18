function generateCoordinates( coordinate ) {
	return [ -1, 0, 1 ].map( modifier => coordinate + modifier );
}

export function findNeighbors( grid, row, col ) {
	const maxRow = grid.length;
	const maxCol = grid[0].length;
	const validCoordinate = ( [ r, c ] ) => r >= 0 && r < maxRow && c >= 0 && c < maxCol && !(r === row && c === col);

	// Cartesian product of generated row and col coordinates,
	// Inspired by https://stackoverflow.com/q/12303989/130121
	const coordinates = generateCoordinates( row ).flatMap( r => generateCoordinates( col ).map( c => [ r, c ] ) )
	
	return coordinates.reduce( ( cells, coordinate ) => {
		if ( validCoordinate( coordinate ) ) {
			cells.push( grid[ coordinate[0] ][ coordinate[1] ] );
		}
		return cells;
	}, [] );
}
