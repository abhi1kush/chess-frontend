// loggerMiddleware.ts
import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = store => next => action => {
  console.log('%cDispatching Action:', 'color: cyan', action);
  const result = next(action);
  console.log('%cNext State:', 'color: green', store.getState());
  return result;
};