/** Simple LRU cache for quick-analyze results keyed by FEN string. */

const DEFAULT_MAX = 400;

/**
 * @param {Map<string, unknown>} map
 * @param {string} key
 */
export function fenCacheGet(map, key) {
  const k = normalizeFenKey(key);
  if (!k || !map.has(k)) return undefined;
  const val = map.get(k);
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
export function fenCacheSet(map, key, value, maxEntries = DEFAULT_MAX) {
  const k = normalizeFenKey(key);
  if (!k) return;
  if (map.has(k)) map.delete(k);
  map.set(k, value);
  while (map.size > maxEntries) {
    const first = map.keys().next().value;
    map.delete(first);
  }
}

export function normalizeFenKey(fen) {
  if (fen == null || typeof fen !== 'string') return '';
  return fen.trim().replace(/\s+/g, ' ');
}
