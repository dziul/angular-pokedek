import leftFill from './index';

it('Should return 2 digits, zero left', () => {
  expect(leftFill(5)).toEqual('05');
  expect(leftFill(19)).toEqual('19');
});

it('Should return 10 digits, zero left', () => {
  expect(leftFill(5, 10)).toEqual('0000000005');
  expect(leftFill(999, 10)).toEqual('0000000999');
});
