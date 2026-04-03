import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockfish from '../../engine/useStockfish';

const onEngineMessage = (msg) => {
  console.log("Stockfish message:", msg);
};

const EngineEnabledListener = ({ fen, pauseSearch = false }) => {
  const engineEnabled = useSelector(state => state.engine.enabled);
  const {
    initEngine,
    startSearch,
    stopSearch,
    terminateEngine,
  } = useStockfish(onEngineMessage, 'lite', 8000);

  useEffect(() => {
    if (!engineEnabled) {
      stopSearch("disabled by UI toggle");
      terminateEngine();
      return;
    }
    /** Second Stockfish worker — pause infinite search during Start Review so the context worker can finish quick-analyze without CPU contention. */
    if (pauseSearch) {
      stopSearch("paused for Start Review");
      terminateEngine();
      return;
    }
    initEngine();
    startSearch(fen);

    return () => {
      terminateEngine();
    };
  }, [engineEnabled, fen, pauseSearch, initEngine, startSearch, stopSearch, terminateEngine]);

  return null; // No UI, just a controller
};

export default EngineEnabledListener;