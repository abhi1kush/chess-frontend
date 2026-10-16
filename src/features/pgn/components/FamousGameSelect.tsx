import { useMemo, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FAMOUS_GAMES } from 'virtual:famous-games';
import { loadPgnFromText } from '../services/loadPgnText';

function famousGameUrl(file: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  return `${root}assets/famousGames/${encodeURIComponent(file)}`;
}

export default function FamousGameSelect() {
  const dispatch = useDispatch();
  const games = useMemo(
    () => [...FAMOUS_GAMES].sort((a, b) => a.title.localeCompare(b.title)),
    [],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const file = event.target.value;
    if (!file) return;
    const game = games.find((item) => item.file === file);
    if (!game) return;

    void fetch(famousGameUrl(game.file))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${game.file} (${response.status})`);
        }
        return response.text();
      })
      .then((pgnData) => {
        loadPgnFromText(dispatch, pgnData);
      })
      .catch((error) => {
        console.error('Error loading famous game PGN:', error);
      });
  };

  return (
    <label className="famous-game-select-wrap" aria-label="Famous games" title="Famous games">
      <select
        className="famous-game-select"
        defaultValue=""
        disabled={games.length === 0}
        onChange={handleChange}
      >
        <option value="" disabled>
          {games.length ? '★ Famous' : 'No games'}
        </option>
        {games.map((game) => (
          <option key={game.id} value={game.file}>
            {game.title}
          </option>
        ))}
      </select>
    </label>
  );
}
