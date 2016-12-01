const test = require('ava');
const isEqualEnough = require('is-equal-enough');
const getEuclideanDistance = require('../src');

test('Returns the distance for points in one dimension', t => {
  t.plan(1);
  const a = {
    x: 0.5,
  };
  const b = {
    x: 0.75,
  };
  t.is(getEuclideanDistance([
    b.x - a.x,
  ]), 0.25);
});

test('Returns the distance for points in two dimensions', t => {
  t.plan(1);
  const a = {
    x: 0.5,
    y: 0.1,
  };
  const b = {
    x: 0.25,
    y: 0.2,
  };
  t.is(
    isEqualEnough(
      getEuclideanDistance([
        b.x - a.x,
        a.y - b.y,
      ]),
      0.269258,
      0.000001
    ),
    true
  );
});

test('Returns the distance for points in three dimensions', t => {
  t.plan(1);
  const a = {
    x: 0.3,
    y: 0.1,
    z: 0.7,
  };
  const b = {
    x: 0.5,
    y: 0.5,
    z: 0.25,
  };
  t.is(
    isEqualEnough(
      getEuclideanDistance([
        b.x - a.x,
        a.y - b.y,
        b.z - a.z,
      ]),
      0.634429,
      0.000001
    ),
    true
  );
});
