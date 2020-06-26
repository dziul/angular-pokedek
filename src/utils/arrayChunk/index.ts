const arrayChunk = <T>(array: T[], size: number) => {
  if (size < 0) {
    throw new RangeError('Size is negative');
  }
  return Array.from({ length: Math.ceil(array.length / size) }, (_: never, index) =>
    array.slice(index * size, index * size + size)
  );
};

export default arrayChunk;
