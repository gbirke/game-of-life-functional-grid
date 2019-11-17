import {strict as assert} from 'assert';
import { sayHello } from '../src/index.js';

describe('Test environment', () => {
	it('should work', () => {
		assert.equal( sayHello(), 'Hello people!');
	});
});
