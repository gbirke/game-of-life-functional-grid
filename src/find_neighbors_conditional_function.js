export function findNeighbors( grid, row, col ) {
	const maxRow = grid.length;
	const maxCol = grid[0].length;

	const rowOrNull = function( rowIndex ) {
		if ( rowIndex < 0 || rowIndex >= maxRow ) {
			return null;
		}
		return grid[rowIndex];
	};

	const colOrNull = function( colIndex, row ) {
		if ( !row || colIndex < 0 || colIndex >= maxCol ) {
			return null;
		}
		return row[colIndex];
	}
	
	const topLeft = colOrNull( col - 1, rowOrNull( row - 1 ) );
	const top = colOrNull( col, rowOrNull( row - 1 ) );
	const topRight =  colOrNull( col + 1, rowOrNull( row - 1 ) );

	const left = colOrNull( col - 1, rowOrNull( row) );
	const right = colOrNull( col + 1, rowOrNull( row ) );

	const bottomLeft = colOrNull( col - 1, rowOrNull( row + 1 ) );
	const bottom = colOrNull( col , rowOrNull( row + 1 ) );
	const bottomRight = colOrNull( col + 1, rowOrNull( row + 1 ) );

	return [
		topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight
	].filter( neighbor => neighbor !== null );
}
