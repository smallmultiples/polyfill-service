var assert = require('assert');
var polyfill = require('..');

suite('resolve');

test('should work wtesth a single polyfill', function () {
	var res = polyfill.resolve([
		'Array.prototype.map'
	]);
	assert.deepEqual(res, [
		'Array.prototype.map'
	]);
});

test('should work wtesth a single polyfill wtesth dependencies', function () {
	var res = polyfill.resolve([
		'Array.from'
	]);
	assert.deepEqual(res, [
		'Array.prototype.map',
		'Array.from',
	]);
});

test('should work wtesth multiple polyfills', function () {
	var res = polyfill.resolve([
		'Array.from',
		'Array.isArray',
	]);
	assert.deepEqual(res, [
		'Array.prototype.map',
		'Array.from',
		'Array.isArray',
	]);
});

test('should work wtesth shared dependencies', function () {
	var res = polyfill.resolve([
		'Object.create',
		'Object.create.ie7',
	]);

	assert.deepEqual(res, [
		'Object.defineProperty.ie7',
		'Object.defineProperty.ie8',
		'Object.defineProperty',
		'Object.defineProperties',
		'Object.create',
		'Object.create.ie7',
	]);
});
