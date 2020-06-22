import { dotNotationToObject, getValueByDotNotation } from './index';

it('Dot notation to object', () => {
  expect(dotNotationToObject('job.name', 'Debuggerman')).toEqual({ job: { name: 'Debuggerman' } });
  expect(dotNotationToObject('list.8', 'Big')).toEqual({ list: { '8': 'Big' } });
});

it('Merge dot notation object into existing object', () => {
  const target = { count: 5, who: 'this', list: ['a', 'c'] };
  dotNotationToObject('country', 'Brazil', target);
  expect(target).toEqual(
    expect.objectContaining({
      country: 'Brazil',
    })
  );
  dotNotationToObject('list', 'b', target);
  expect(target.list).toEqual(['a', 'c', 'b']);
  dotNotationToObject('country', 'Argentina', target); // country becomes array
  expect(target).toEqual(
    expect.objectContaining({
      country: expect.any(Array),
    })
  );
});

it('Do not merge when there are equal sensitive values ​​in array', () => {
  const targetObject = { list: ['a', 'b', 'c'] };
  const copyTargetObject = { list: [...targetObject.list] };

  dotNotationToObject('list', 'b', targetObject); // not add
  expect(targetObject).toEqual(copyTargetObject);

  dotNotationToObject('list', 'A', targetObject); // add
  expect(targetObject).not.toEqual(copyTargetObject);
});

it('Get object value  by not notation', () => {
  const objectTarget = {
    list: ['a', 'b', 'c', 'd'],
    who: 'Papa',
    data: { title: 'Yes baby', active: false },
  };
  expect(getValueByDotNotation(objectTarget, 'data.active')).toEqual(false);
  expect(getValueByDotNotation(objectTarget, 'data.title')).toEqual('Yes baby');
  expect(getValueByDotNotation(objectTarget, 'data') instanceof Object).toBeTruthy();
  expect(getValueByDotNotation(objectTarget, 'list.3')).toEqual('d');
  expect(getValueByDotNotation(objectTarget, 'list.0')).toEqual('a');
  expect(getValueByDotNotation(objectTarget, 'list')).toContain('b');
  expect(getValueByDotNotation(objectTarget, 'list') instanceof Array).toBeTruthy();
  expect(getValueByDotNotation(objectTarget, 'who')).toEqual('Papa');
});
