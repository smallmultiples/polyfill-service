
var polyfill = require('..');

describe('Polyfills', function () {
	it('should resolve names', function () {
		polyfill.polyfills['Array.isArray'].name.should.equal('Array.isArray');
	});

	it('should resolve requires when not defined', function () {
		polyfill.polyfills['Array.isArray'].requires.should.be.a.Array;
	});

	it('should resolve requires when not an array', function () {
		polyfill.polyfills['Array.from'].requires.should.be.a.Array;
	})
})
