// ref http://en.wikipedia.org/wiki/YIQ
// ref https://24ways.org/2010/calculating-color-contrast/

export const arrayChunk = (data: Uint8ClampedArray, size: number) => {
  if (size < 0) {
    throw new RangeError('Size is negative');
  }
  return Array.from({ length: Math.ceil(data.length / size) }, (_: never, index) =>
    data.slice(index * size, index * size + size)
  );
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

export const getColorByConstrastPorcentage = (
  colors: Uint8ClampedArray,
  percentageStart: number,
  percentageEnd = 100
) => {
  const chunks = arrayChunk(colors, 4);
  const colorOut = chunks
    .filter((color) => {
      const constrast = getContrast(color[0], color[1], color[2]);
      return constrast > percentageStart && constrast < percentageEnd;
    })
    .sort(
      (colorA, colorB) =>
        getContrast(colorA[0], colorA[1], colorA[2]) - getContrast(colorB[0], colorB[1], colorB[2])
    )
    .map((color) => Array.from(color));

  return colorOut;
};

export const dataColorToRgba = (color: Uint8ClampedArray) => {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3] / 255})`;
};
export const lightestColor = (colors: Uint8ClampedArray) => {
  const parsed = sortDarkestToLightest(colors);
  return parsed.pop();
};

export const getColorsOfImage = (imageUrl: string, scale = 1) => {
  const elementImage = new Image();
  elementImage.src = imageUrl;
  elementImage.crossOrigin = 'Anonymous';
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const imageWith = elementImage.width * scale;
  const imageHeight = elementImage.height * scale;
  context.drawImage(elementImage, 0, 0, imageWith, imageHeight);
  const iamgeData = context.getImageData(0, 0, imageWith, imageHeight);
  return iamgeData.data;
};
