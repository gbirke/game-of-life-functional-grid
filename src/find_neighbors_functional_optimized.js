export function findNeighbors( grid, row, col ) {
	const maxRow = grid.length;
	const maxCol = grid[0].length;

	const coordinates = [
		[row-1, col-1], [row-1, col], [row-1, col+1],
		[row,   col-1],               [row,   col+1],
		[row+1, col-1], [row+1, col], [row+1, col+1],
	]
	
	const validCoordinate = ( [ r, c ] ) => r >= 0 && r < maxRow && c >= 0 && c < maxCol;
	return coordinates.reduce( ( cells, coordinate ) => {
		if ( validCoordinate( coordinate ) ) {
			cells.push( grid[ coordinate[0] ][ coordinate[1] ] );
		}
		return cells;
	}, [] );
}
