// loggerMiddleware.ts — disabled in production (no console I/O); enable locally if needed.
import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = () => next => action => next(action);