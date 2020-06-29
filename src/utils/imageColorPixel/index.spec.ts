import { getDominantColor } from './index';

it('Should return all values when there is no filter', () => {
  const colors = new Uint8ClampedArray([
    0,
    0,
    0,
    255,
    0,
    0,
    0,
    0,
    255,
    224,
    221,
    0,
    0,
    0,
    0,
    0,
    255,
    224,
    221,
    0,
  ]);

  expect(getDominantColor(colors)).toEqual([
    [0, 0, 0, 0], // r g b a
    [255, 224, 221, 0],
  ]);
});

it('Should return all without ignored values', () => {
  const colors = new Uint8ClampedArray([
    0,
    0,
    0,
    255,
    0,
    0,
    0,
    0,
    255,
    224,
    221,
    0,
    0,
    0,
    0,
    0,
    255,
    224,
    221,
    0,
  ]);

  expect(getDominantColor(colors, [[255, 224, 221]])).toEqual([[0, 0, 0, 0]]);
});
