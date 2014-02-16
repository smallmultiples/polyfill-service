
/**
 * Given a list of polyfills,
 * returns all the polyfills to include in the build.
 * Makes sure that any dependencies are added before the dependent.
 *
 *   var polyfills = resolve(['Array.from']);
 *   // ['Array.prototype.map', 'Array.from'];
 *
 * Because `Array.from` depends on `[].map`.
 *
 * @param {Array} polyfills
 * @return {Array} polyfills
 * @api public
 */

var polyfills = require('./polyfills');

module.exports = resolve;

function resolve(names) {
	var out = [];
	names.forEach(push);
	return out;

	// push a dependency to the list
	function push(name) {
		var polyfill = polyfills[name];
		if (!polyfill) {
			throw new Error('polyfill by the name of "' + name + '" does not exist');
		}

		// already added
		if (~out.indexOf(name)) return;

		// push dependencies
		polyfill.requires.forEach(push);

		// actually push this polyfill
		out.push(name);
	}
}
