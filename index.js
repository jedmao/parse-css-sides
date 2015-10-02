var t = require('tcomb');
var cssListHelpers = require('css-list-helpers');

var Sides = t.struct({
	top: t.Str,
	right: t.Str,
	bottom: t.Str,
	left: t.Str
});

module.exports = t.func(t.Str, Sides).of(function(value) {
	var sides = cssListHelpers.splitBySpaces(value);
	switch (sides.length) {
		case 1: {
			return {
				top: sides[0],
				right: sides[0],
				bottom: sides[0],
				left: sides[0]
			};
		}
		case 2:
			return {
				top: sides[0],
				right: sides[1],
				bottom: sides[0],
				left: sides[1]
			};
		case 3:
			return {
				top: sides[0],
				right: sides[1],
				bottom: sides[2],
				left: sides[1]
			};
		case 4:
			return {
				top: sides[0],
				right: sides[1],
				bottom: sides[2],
				left: sides[3]
			};
		default:
			throw new Error('Cannot parse ' + sides.length + ' sides');
	}
});
