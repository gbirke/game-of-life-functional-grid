import { strict as assert } from 'assert';
import { findNeighbors as findNeighborsConditional } from '../src/find_neighbors_conditional';
import { findNeighbors as findNeighborsConditionalFunction } from '../src/find_neighbors_conditional_function';
import { findNeighbors as findNeighborsCartesianProcedural } from '../src/find_neighbors_cartesian_procedural';
import { findNeighbors as findNeighborsFunctional } from '../src/find_neighbors_functional';
import { findNeighbors as findNeighborsFunctionalOptimized } from '../src/find_neighbors_functional_optimized';
import { ALIVE, DEAD } from '../src/cell_states.js';

describe( 'Test all implementations of findNeighbors', () => {

	const grid = [
		[ DEAD, ALIVE, DEAD ],
		[ DEAD, ALIVE, DEAD ],
		[ DEAD, ALIVE, DEAD ],
	];

	[
		[ findNeighborsConditional, 'conditional only implementation' ],
		[ findNeighborsConditionalFunction, 'conditional with grid access function implementation' ],
		[ findNeighborsCartesianProcedural, 'procedural implementation of cartesian product' ],
		[ findNeighborsFunctional, 'functional implementation of cartesian product' ],
		[ findNeighborsFunctionalOptimized, 'optimized functional implementation of cartesian product' ],

	].forEach( ( [ findNeighbors, description ] ) => describe( description, () => {
		it('should return no neighbors on 1x1 grid', () => {
			const smallestGrid = [[ALIVE]]
			
			assert.deepEqual( findNeighbors( smallestGrid, 0, 0 ), [] );
		});

		it('should return all neighbors from center of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 1, 1 ), [
				DEAD, ALIVE, DEAD, 
				DEAD, DEAD, 
				DEAD, ALIVE, DEAD, 
			] );
		});

		it('should return all neighbors from top left of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 0, 0 ), [
				ALIVE, 
				DEAD, ALIVE, 
			] );
		});

		it('should return all neighbors from top of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 0, 1 ), [
				DEAD, DEAD, 
				DEAD, ALIVE, DEAD, 
			] );
		});

		it('should return all neighbors from top right of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 0, 2 ), [ 
				ALIVE, 
				ALIVE, DEAD 
			] );
		});

		it('should return all neighbors from left side of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 1, 0 ), [ 
				DEAD, ALIVE, 
				ALIVE, 
				DEAD, ALIVE 
			] );
		});

		it('should return all neighbors from right side of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 1, 2 ), [ 
				ALIVE, DEAD, 
				ALIVE, 
				ALIVE, DEAD 
			] );
		});

		it('should return all neighbors from bottom left of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 2, 0 ), [ 
				DEAD, ALIVE, 
				ALIVE 
			] );
		});

		it('should return all neighbors from bottom of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 2, 1 ), [ 
				DEAD, ALIVE, DEAD, 
				DEAD, DEAD 
			] );
		});

		it('should return all neighbors from bottom right of 3x3 grid', () => {
			assert.deepEqual( findNeighbors( grid, 2, 2 ), [ 
				ALIVE, DEAD, 
				ALIVE 
			] );
		});
	} ) );

});


