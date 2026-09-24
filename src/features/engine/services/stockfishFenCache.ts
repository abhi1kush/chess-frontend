/** Simple LRU cache for quick-analyze results keyed by FEN string. */

const DEFAULT_MAX = 400;

/**
 * @param {Map<string, unknown>} map
 * @param {string} key
 */
export function fenCacheGet(map: Map<string, unknown>, key: string): unknown | undefined {
  const k = normalizeFenKey(key);
  if (!k || !map.has(k)) return undefined;

  const val = map.get(k);
  if (val === undefined) return undefined;
  
  map.delete(k);
  map.set(k, val);
  return val;
}

/**
 * @param {Map<string, unknown>} map
 * @param {string} key
 * @param {unknown} value
 * @param {number} [maxEntries]
 */
export function fenCacheSet(map: Map<string, unknown>, key: string, value: unknown, maxEntries = DEFAULT_MAX) {
  const k = normalizeFenKey(key);
  if (!k) return;
  if (map.has(k)) {
    map.delete(k);
  }

  while (map.size > maxEntries) {
    const first = map.keys().next().value;
    if (first !== undefined) {
      map.delete(first);
    }
  }

  map.set(k, value);
}

export function normalizeFenKey(fen: string): string {
  if (fen == null || typeof fen !== 'string') return '';
  return fen.trim().replace(/\s+/g, ' ');
}
