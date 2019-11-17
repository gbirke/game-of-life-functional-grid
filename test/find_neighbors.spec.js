import { strict as assert } from 'assert';
import { findNeighbors as findNeighborsConditional } from '../src/find_neighbors_conditional.js';
import { findNeighbors as findNeighborsFunctional } from '../src/find_neighbors_functional.js';
import { ALIVE, DEAD } from '../src/cell_states.js';

describe('findNeighborsConditional', () => {

	const grid = [
		[ DEAD, ALIVE, DEAD ],
		[ DEAD, ALIVE, DEAD ],
		[ DEAD, ALIVE, DEAD ],
	];

	describe('conditional solution', () => {
		it('should return no neighbors on 1x1 grid', () => {
			const smallestGrid = [[ALIVE]]
			
			assert.deepEqual( findNeighborsConditional( smallestGrid, 0, 0 ), [] );
		});

		it('should return all neighbors from center of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 1, 1 ), [DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ] );
		});

		it('should return all neighbors from center of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 1, 1 ), [DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ] );
		});

		it('should return all neighbors from top left of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 0, 0 ), [ALIVE, DEAD, ALIVE, ] );
		});

		it('should return all neighbors from top of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 0, 1 ), [DEAD, DEAD, DEAD, ALIVE, DEAD, ] );
		});

		it('should return all neighbors from top right of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 0, 2 ), [ ALIVE, ALIVE, DEAD ] );
		});

		it('should return all neighbors from left side of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 1, 0 ), [ DEAD, ALIVE, ALIVE, DEAD, ALIVE ] );
		});

		it('should return all neighbors from right side of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 1, 2 ), [ ALIVE, DEAD, ALIVE, ALIVE, DEAD ] );
		});

		it('should return all neighbors from bottom left of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 2, 0 ), [ DEAD, ALIVE, ALIVE ] );
		});

		it('should return all neighbors from bottom of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 2, 1 ), [ DEAD, ALIVE, DEAD, DEAD, DEAD ] );
		});

		it('should return all neighbors from bottom right of 3x3 grid', () => {
			assert.deepEqual( findNeighborsConditional( grid, 2, 2 ), [ ALIVE, DEAD, ALIVE ] );
		});
	});

	describe('functional solution', () => {
		it('should return no neighbors on 1x1 grid', () => {
			const smallestGrid = [[ALIVE]]
			
			assert.deepEqual( findNeighborsFunctional( smallestGrid, 0, 0 ), [] );
		});

		it('should return all neighbors from center of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 1, 1 ), [DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ] );
		});

		it('should return all neighbors from center of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 1, 1 ), [DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ] );
		});

		it('should return all neighbors from top left of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 0, 0 ), [ALIVE, DEAD, ALIVE, ] );
		});

		it('should return all neighbors from top of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 0, 1 ), [DEAD, DEAD, DEAD, ALIVE, DEAD, ] );
		});

		it('should return all neighbors from top right of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 0, 2 ), [ ALIVE, ALIVE, DEAD ] );
		});

		it('should return all neighbors from left side of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 1, 0 ), [ DEAD, ALIVE, ALIVE, DEAD, ALIVE ] );
		});

		it('should return all neighbors from right side of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 1, 2 ), [ ALIVE, DEAD, ALIVE, ALIVE, DEAD ] );
		});

		it('should return all neighbors from bottom left of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 2, 0 ), [ DEAD, ALIVE, ALIVE ] );
		});

		it('should return all neighbors from bottom of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 2, 1 ), [ DEAD, ALIVE, DEAD, DEAD, DEAD ] );
		});

		it('should return all neighbors from bottom right of 3x3 grid', () => {
			assert.deepEqual( findNeighborsFunctional( grid, 2, 2 ), [ ALIVE, DEAD, ALIVE ] );
		});
	});

});
