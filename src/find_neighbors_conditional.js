export function findNeighbors( grid, row, col ) {
	const maxRow = grid.length - 1;
	const maxCol = grid[0].length - 1;
	
	const topLeft = row > 0 && col > 0 ? grid[ row - 1 ][ col - 1 ] : null;
	const top = row > 0 ? grid[ row - 1 ][ col ] : null;
	const topRight = row > 0 && col < maxCol ? grid[ row - 1 ][ col + 1 ] : null;

	const left = col > 0 ? grid[ row ][ col - 1 ] : null;
	const right = col < maxCol ? grid[ row ][ col + 1 ] : null;

	const bottomLeft = row < maxRow && col > 0 ? grid[ row + 1 ][ col - 1 ] : null;
	const bottom = row < maxRow ? grid[ row + 1 ][ col ] : null;
	const bottomRight = row < maxRow && col < maxCol ? grid[ row + 1 ][ col + 1 ] : null;

	return [
		topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight
	].filter( neighbor => neighbor !== null );
}
