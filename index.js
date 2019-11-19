import { Benchmark } from 'benchmark';
import { findNeighbors as findNeighborsConditional } from './src/find_neighbors_conditional';
import { findNeighbors as findNeighborsConditionalFunction } from './src/find_neighbors_conditional_function.js';
import { findNeighbors as findNeighborsCartesianProcedural } from './src/find_neighbors_cartesian_procedural';
import { findNeighbors as findNeighborsFunctional } from './src/find_neighbors_functional';
import { findNeighbors as findNeighborsFunctionalOptimized } from './src/find_neighbors_functional_optimized';
import { ALIVE, DEAD } from './src/cell_states.js';

const grid = [
	[ DEAD, ALIVE, DEAD ],
	[ DEAD, ALIVE, DEAD ],
	[ DEAD, ALIVE, DEAD ],
];


let suite = new Benchmark.Suite;

// add tests
suite.add('findNeighborsConditional', function() {
	findNeighborsConditional( grid, 1, 1 );
})
suite.add('findNeighborsConditionalFunction', function() {
	findNeighborsConditionalFunction( grid, 1, 1 );
})
suite.add('findNeighborsCartesianProcedural', function() {
	findNeighborsConditional( grid, 1, 1 );
})
.add('findNeighborsFunctional', function() {
  	findNeighborsFunctional( grid, 1, 1 );
})
.add('findNeighborsFunctionalOptimized', function() {
  	findNeighborsFunctionalOptimized( grid, 1, 1 );
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function(evt) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
