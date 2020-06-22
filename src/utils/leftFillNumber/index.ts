const leftFillNumber = (needle: number, fillLength = 2) =>
  needle.toString().padStart(fillLength, '0');

export default leftFillNumber;
