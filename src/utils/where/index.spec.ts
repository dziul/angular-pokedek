import where from './index';

it("Should filter only the values ​​that have 'abc'", () => {
  expect(where(['a', 'abc', 'tabcy', 'ab2c'], 'abc')).toEqual(['abc', 'tabcy']);
});

it("Should filter only the values ​​that have 'abc' used not notation", () => {
  const data = [
    {
      rule: 'alert',
      user: {
        name: 'John Lima',
        city: 'San Pablo',
        age: 49,
      },
    },
    {
      rule: 'warn',
      user: {
        name: 'Will Jonh',
        city: 'New York',
        age: 49,
      },
    },
    {
      rule: 'alert',
      user: {
        name: 'Gabriel Smith',
        city: 'Buenos Aires',
        age: 49,
      },
    },
  ];

  const result = [
    {
      rule: 'alert',
      user: {
        name: 'John Lima',
        city: 'San Pablo',
        age: 49,
      },
    },
    {
      rule: 'warn',
      user: {
        name: 'Will Jonh',
        city: 'New York',
        age: 49,
      },
    },
  ];
  expect(where(data, 'john', 'user.name')).toEqual(result);
});
