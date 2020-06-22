import { getValueByDotNotation } from '../notationStringObject';
import stringNormalize from '../stringNormalize';

/**
 * params [target]  Is dot notation   example: results.name.last
 */
const where = <T, K extends keyof T>(data: T[], needle: string, target?: K) => {
  return data.filter((item) => {
    const needleParse = stringNormalize(needle.toLowerCase());
    let valueParse: string;
    if (target && typeof item === 'object') {
      const value = getValueByDotNotation(item, target);
      if (!value) {
        throw new Error(`Not found props ${target} in ${JSON.stringify(value)}`);
      }
      valueParse = stringNormalize(value.toString()).toLowerCase();
    } else {
      valueParse = stringNormalize(item.toString().toLowerCase());
    }
    return valueParse.indexOf(needleParse) !== -1;
    // return valueProcessed.search(needleProcessed) !== -1;
  });
};

export default where;
