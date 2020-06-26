import { lightestColor, sortDarkestToLightest } from '.';

it('Should sort color by dark to light and get color lightest', () => {
  const colors = new Uint8ClampedArray([98, 60, 21, 255, 0, 59, 57, 255, 239, 59, 57, 255]);
  const sortedColors = sortDarkestToLightest(colors);

  const should = [
    new Uint8ClampedArray([0, 59, 57, 255]),
    new Uint8ClampedArray([98, 60, 21, 255]),
    new Uint8ClampedArray([239, 59, 57, 255]),
  ];
  expect(sortedColors).toEqual(should);

  expect(lightestColor(colors)).toEqual(new Uint8ClampedArray([239, 59, 57, 255]));
});
