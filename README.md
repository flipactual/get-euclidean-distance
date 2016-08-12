[![flipactual](https://img.shields.io/badge/😋-flipactual-43A6F6.svg?style=flat-square)](https://flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/get-euclidean-distance.svg?style=flat-square)](https://travis-ci.org/flipactual/get-euclidean-distance/)
[![Node](https://img.shields.io/node/v/get-euclidean-distance.svg?style=flat-square)](http://npmjs.com/package/get-euclidean-distance)
[![NPM](https://img.shields.io/npm/v/get-euclidean-distance.svg?style=flat-square)](http://npmjs.com/package/get-euclidean-distance)

<a name="getEuclideanDistance"></a>

## getEuclideanDistance(d) ⇒ <code>Number</code>
Find the euclidean distance between two points in arbitrary dimensions.

**Kind**: global function  
**Returns**: <code>Number</code> - The euclidean distance between the points.  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>Array.&lt;Number&gt;</code> | The distances between two points in each of the points' dimensions. |

**Example**  
```js
const a = {
  x: 0.5,
  y: 0.1,
};
const b = {
  x: 0.25,
  y: 0.2,
};
getEuclideanDistance([
  b.x - a.x,
  a.y - b.y,
]);
// → 0.26925824035672524
```

## License

MIT @ [Flip](https://github.com/flipactual)
