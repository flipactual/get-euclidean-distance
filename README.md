# get-euclidean-distance

Find the euclidean distance between two points in arbitrary dimensions.

**Parameters:**

| Name | Type | Description |
| --- | --- | ---- |
| deltas | Number[] | The distances between two points in each of the points' dimensions. |

**Returns:**

_Number_ The euclidean distance between the points.

**Example:**

```js
const a = {
  x: -0.5,
  y: 10,
}
const b = {
  x: 0.5,
  y: 20,
}
getEuclideanDistance([
  b.x - a.x,
  a.y - b.y,
])
// → 10.04987562112089
```
