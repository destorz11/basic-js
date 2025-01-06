const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	// Extract the non -1 values
	let heights = arr.filter(value => value !== -1)

	// Sort the heights array
	heights.sort((a, b) => a - b)

	// Rebuild the original array by replacing the -1s and putting the sorted values back
	let result = arr.map(value => (value === -1 ? -1 : heights.shift()))

	return result
}

module.exports = {
	sortByHeight,
}
