var assert = require('assert');
var polyfill = require('..');

suite('polyfill');

test('should resolve names', function () {
	assert.equal(polyfill.polyfills['Array.isArray'].name, 'Array.isArray');
});

test('should resolve requires when not defined', function () {
	assert(polyfill.polyfills['Array.isArray'].requires instanceof Array);
});

test('should resolve requires when not an array', function () {
	assert(polyfill.polyfills['Array.from'].requires instanceof Array);
})
