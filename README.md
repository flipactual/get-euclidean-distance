# get-euclidean-distance

Find the euclidean distance between two points in arbitrary dimensions.

## Example:

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
