import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStockfishContext } from '../../context/StockfishContext';

const EngineEnabledListener = ({ fen, pauseSearch = false }: { fen: string; pauseSearch?: boolean }) => {
const engineEnabled = useSelector((state: { engine: { enabled: boolean } }) => state.engine.enabled);
const { initEngine, startSearch, stopSearch } = useStockfishContext();
  useEffect(() => {
    if (!engineEnabled) {
      stopSearch('disabled by UI toggle');
      return;
    }
    if (pauseSearch) {
      stopSearch('paused for Start Review');
      return;
    }
    initEngine();
    startSearch(fen);

    return () => {
      stopSearch('listener cleanup');
    };
  }, [engineEnabled, fen, pauseSearch, initEngine, startSearch, stopSearch]);

  return null;
};

export default EngineEnabledListener;
