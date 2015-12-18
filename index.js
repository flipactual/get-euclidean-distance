/**
 * Find the euclidean distance between two points in arbitrary dimensions.
 *
 * @param {Number[]} deltas
 * The distances between two points in each of the points' dimensions.
 *
 * @example
 * const a = {
 *   x: 0.5,
 *   y: 0.1,
 * }
 * const b = {
 *   x: 0.25,
 *   y: 0.2,
 * }
 * getEuclideanDistance([
 *   b.x - a.x,
 *   a.y - b.y,
 * ])
 * // → 0.26925824035672524
 *
 * @return {Number}
 * The euclidean distance between the points.
 */
function getEuclideanDistance(deltas) {
  return Math.sqrt([
    0,
    ...deltas,
  ].reduce((p, c) => p + Math.pow(c, 2)))
}

module.exports = getEuclideanDistance
