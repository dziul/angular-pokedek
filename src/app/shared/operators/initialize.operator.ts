import { defer, Observable } from 'rxjs';

export const initialize = <T>(callback: () => void) => (source: Observable<T>) =>
  defer(() => {
    callback();
    return source;
  });
