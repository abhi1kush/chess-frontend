import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useChessEngineContext } from '../../engine/hooks/useEngine';

const EngineEnabledListener = ({ fen, pauseSearch = false }: { fen: string; pauseSearch?: boolean }) => {
  const engineEnabled = useSelector((state: { engine: { enabled: boolean } }) => state.engine.enabled);
  const { engine } = useChessEngineContext();

  useEffect(() => {
    if (!engineEnabled) {
      engine.stopLiveAnalysis();
      return;
    }
    if (pauseSearch) {
      engine.stopLiveAnalysis();
      return;
    }
    engine.start();
    engine.startLiveAnalysis(fen);

    return () => {
      engine.stopLiveAnalysis();
    };
  }, [engineEnabled, fen, pauseSearch, engine]);

  return null;
};

export default EngineEnabledListener;
