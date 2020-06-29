// ref http://en.wikipedia.org/wiki/YIQ
// ref https://24ways.org/2010/calculating-color-contrast/

export const arrayChunk = (data: Uint8ClampedArray, size: number) => {
  if (size < 0) {
    throw new RangeError('Size is negative');
  }
  return Array.from({ length: Math.ceil(data.length / size) }, (_: never, index) =>
    Array.from(data.slice(index * size, index * size + size))
  );
};

const RGBAList = (colors: Uint8ClampedArray) => {
  return arrayChunk(colors, 4).map((color) => {
    const last = color.pop();
    color.push(last / 255);
    return color;
  });
};

export const getContrast = (r: number, g: number, b: number) => {
  return ((r * 299 + g * 587 + b * 114) / 1000 / 255) * 100; // 0 - 100
};

export const sortDarkestToLightest = (colors: Uint8ClampedArray) => {
  // Uint8ClampedArray
  const chunks = arrayChunk(colors, 4); // r g b a = 4
  return chunks.sort(
    (colorA, colorB) =>
      getContrast(colorA[0], colorA[1], colorA[2]) - getContrast(colorB[0], colorB[1], colorB[2])
  );
};

// export const getColorByConstrastPorcentage = (
//   colors: Uint8ClampedArray,
//   percentageStart: number,
//   percentageEnd = 100
// ) => {
//   const chunks = arrayChunk(colors, 4);
//   const colorOut = chunks
//     .filter((color) => {
//       const constrast = getContrast(color[0], color[1], color[2]);
//       return constrast > percentageStart && constrast < percentageEnd;
//     })
//     .sort(
//       (colorA, colorB) =>
//         getContrast(colorA[0], colorA[1], colorA[2]) - getContrast(colorB[0], colorB[1], colorB[2])
//     )
//     .map((color) => Array.from(color));

//   return colorOut;
// };

// export const dataColorToRgba = (color: Uint8ClampedArray) => {
//   return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3] / 255})`;
// };

// export const lightestColor = (colors: Uint8ClampedArray) => {
//   const parsed = sortDarkestToLightest(colors);
//   return parsed.pop();
// };

export const getDominantColor = (colors: Uint8ClampedArray, ignoreRGBAColors?: number[][]) => {
  const separator = '-';

  const duplicates = RGBAList(colors).reduce((acc, value) => {
    const key = value.join(separator);

    const checkIgnores =
      Array.isArray(ignoreRGBAColors) &&
      ignoreRGBAColors.some((RGBA) => key.includes(RGBA.join(separator)));
    if (checkIgnores) {
      return acc;
    }

    acc[key] = acc[key] ? acc[key] + 1 : 1;
    return acc;
  }, {} as { [k: string]: number });

  const valueMajor = Math.max(...Object.values(duplicates));

  return Object.keys(duplicates).reduce((acc, value) => {
    if (duplicates[value] === valueMajor) {
      acc.push(value.split(separator).map(Number));
    }
    return acc;
  }, [] as number[][]);
};
