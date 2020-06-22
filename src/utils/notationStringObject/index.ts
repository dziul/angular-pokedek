interface GenericObject extends Object {
  [key: string]: any;
}

const stringToArray = (needle: string, separator: string) =>
  needle.split(separator).filter((value) => value.length);

const buildCore = (
  target: GenericObject,
  notation: string,
  value: any,
  separator = '.',
  mergeValue = true
) => {
  const parts = stringToArray(notation, separator);
  const partItemLast = parts.pop();
  let cloneTarget = target;
  let next: string | undefined;

  do {
    next = parts.shift();
    if (!next) continue;
    if (!(cloneTarget[next] instanceof Object)) cloneTarget[next] = {};
    cloneTarget = cloneTarget[next];
  } while (next);

  if (mergeValue && partItemLast && Object.prototype.hasOwnProperty.call(cloneTarget, partItemLast)) {
    if (cloneTarget[partItemLast] instanceof Array) {
      const cloneTargetItem = cloneTarget[partItemLast] as any[];
      if (!cloneTargetItem.includes(value)) cloneTargetItem.push(value);
    } else if (cloneTarget[partItemLast] instanceof Object && value instanceof Object) {
      cloneTarget[partItemLast] = Object.keys(value).reduce(
        (accumulator, current) => buildCore(accumulator, current, value[current]),
        cloneTarget[partItemLast]
      );
    } else cloneTarget[partItemLast] = [cloneTarget[partItemLast], value];
  } else if (!partItemLast) {
    return null;
  } else cloneTarget[partItemLast] = value;
  return target;
};

export const slashNotationToObject = (slashNotation: string, value: any, targetObject: GenericObject = {}) =>
  buildCore(targetObject, slashNotation, value, '/');

export const dotNotationToObject = (notation: string, value: any, targetObject: GenericObject = {}) =>
  buildCore(targetObject, notation, value);

export const getValueByDotNotation = (objectTarget: GenericObject, notation: string, separator = '.') => {
  const parts = stringToArray(notation, separator);
  const partItemLast = parts.pop();

  if (!partItemLast) return null;

  let copyTarget = { ...objectTarget };
  let next: string | undefined;

  do {
    next = parts.shift();
    if (!next) continue;
    copyTarget = copyTarget[next];
  } while (next);

  return copyTarget[partItemLast];
};
