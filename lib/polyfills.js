
/**
 * An object containing all the polyfills.
 *
 *    polyfill[name] = config
 *
 * `name` is the full, case-sensitive folder name.
 * The polyfill is added to the config as a `.js` property.
 */

var fs = require('fs');
var join = require('path').join;

var polyfills = module.exports = {};
var sourceFolder = join(__dirname, '..', 'source');

fs.readdirSync(sourceFolder).forEach(function (name) {
	if (name[0] === '.') return;
	var folder = join(sourceFolder, name);
	var filename = '../source/' + name + '/config.json';
	var config;
	try {
		config = require(filename);
	} catch (err) {
		throw new Error('Error parsing "' + filename + '".');
	}
	// add folder name to the config
	config.name = name;
	// add the polyfill as `.js`
	config.js = fs.readFileSync(join(folder, 'polyfill.js'), 'utf8');
	// normalize dependencies into arrays
	config.requires = config.requires || [];
	if (!Array.isArray(config.requires)) config.requires = [config.requires];
	polyfills[name] = config;
});
