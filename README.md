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
  x: 0.5,
  y: 0.1,
}
const b = {
  x: 0.25,
  y: 0.2,
}
getEuclideanDistance([
  b.x - a.x,
  a.y - b.y,
])
// → 0.26925824035672524
```
