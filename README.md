# Example `findNeighbors` implementations for Conway's Game of Life

These are JavaScript examples of how to implement the "find neighboring cells" functionality in [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), where the grid of cells is a two-dimensional array. The important part in these implementations is how to handle cells that are at the boundaries of the arrays, where the neighbors would be out of bounds.

Some implementations use the idea of a "cartesian product" where you "multiply" two arrays `[-1, 0, 1]` to create all combinations of additions and subtractions of coordinate pairs.

## Implementations
* **`find_neighbors_conditional.js`** - My first implementation, to understand the problem and create the unit tests. It uses explicit variable names for the eight cells around the coordinate and ternary checks to avoid out-of-bounds checks.
* **`find_neighbors_functional.js`** - The second implementation, using functional programming for generating and subsequently filtering the coordinate pairs to generate a list of cell contents. 
* **`find_neighbors_functional_optimized.js`** - This implementation is trying to alleviate the bad performance of the functional implementation by pre-rendering the "neighbor grid".
* **`find_neighbors_conditional_function.js`** - This implementation is trying to make the "conditional" implementation more readable by replacing the ternary checks with functions. It fails at that atttempt and is slower.
* **`find_neighbors_cartesian_procedural.js`** - This implementation does not use any functions, only `for` loops and conditions.

## Run benchmark of the implementations

```bash
node -r esm index.js
```

## Run the unit tests of the implementations

```bash
npm run test
```

