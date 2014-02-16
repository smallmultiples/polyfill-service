
var polyfill = require('..');

describe('Resolve', function () {
	it('should work with a single polyfill', function () {
		var res = polyfill.resolve([
			'Array.prototype.map'
		]);
		res.should.eql([
			'Array.prototype.map'
		]);
	});

	it('should work with a single polyfill with dependencies', function () {
		var res = polyfill.resolve([
			'Array.from'
		]);
		res.should.eql([
			'Array.prototype.map',
			'Array.from',
		]);
	});

	it('should work with multiple polyfills', function () {
		var res = polyfill.resolve([
			'Array.from',
			'Array.isArray',
		]);
		res.should.eql([
			'Array.prototype.map',
			'Array.from',
			'Array.isArray',
		]);
	});

	it('should work with shared dependencies', function () {
		var res = polyfill.resolve([
			'Object.create',
			'Object.create.ie7',
		]);
		res.should.eql([
			'Object.defineProperty.ie7',
			'Object.defineProperty.ie8',
			'Object.defineProperty',
			'Object.defineProperties',
			'Object.create',
			'Object.create.ie7',
		]);
	});
})
