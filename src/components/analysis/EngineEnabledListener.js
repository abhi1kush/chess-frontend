import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockfish from '../../engine/useStockfish';

const onEngineMessage = (msg) => {
  console.log("Stockfish message:", msg);
};

const EngineEnabledListener = ({ fen }) => {
  const engineEnabled = useSelector(state => state.engine.enabled);
  const {
    initEngine,
    startSearch,
    stopSearch,
    terminateEngine,
  } = useStockfish(onEngineMessage, 'lite', 8000);

  useEffect(() => {
    if (engineEnabled) {
      initEngine();
      startSearch(fen);
    } else {
      stopSearch("disabled by UI toggle");
      terminateEngine();
    }

    return () => {
      terminateEngine();
    };
  }, [engineEnabled, fen, initEngine, startSearch, stopSearch, terminateEngine]); // React to changes

  return null; // No UI, just a controller
};

export default EngineEnabledListener;