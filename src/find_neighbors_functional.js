export function findNeighbors( grid, row, col ) {
	const maxRow = grid.length;
	const maxCol = grid[0].length;
	const generateCoordinates = coordinate => [ -1, 0, 1 ].map( modifier => coordinate + modifier );

	const rowInsideGrid = rowIndex => rowIndex >= 0 && rowIndex < maxRow;
	const colInsideGrid = colIndex => colIndex >= 0 && colIndex < maxCol;
	const isCenter = ( rowIndex, colIndex ) => rowIndex === row && colIndex === col
	const validCoordinate = ( [ r, c ] ) => rowInsideGrid( r ) && colInsideGrid( c ) && !isCenter( r, c )

	// Cartesian product of generated row and col coordinates,
	// Inspired by https://stackoverflow.com/q/12303989/130121
	const coordinates = generateCoordinates( row ).flatMap( r => generateCoordinates( col ).map( c => [ r, c ] ) )

	return coordinates.filter( validCoordinate ).map( ( [ r, c ] ) => grid[r][c] );
	
}
