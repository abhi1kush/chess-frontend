import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useChessEngineContext } from '../../engine/hooks/useEngine';
import { setPgnAnalysisAtIndex } from '../redux/analysisActions';
import { normalizeFenKey } from '../../engine/services/stockfishFenCache';

const ANALYSIS_ENGINE_CONFIG = {
  threads: 1,
  hashMb: 16,
  multiPv: 1,
};

type UsePositionAnalysisArgs = {
  position: string;
  currentMoveIndex: number;
  fensLength: number;
  enabledChessEngine: boolean;
  isReviewing: boolean;
  reviewAnalysisComplete: boolean;
  onMainLinePosition: boolean;
  analysisDataEval?: number | null;
};

export function usePositionAnalysis({
  position,
  currentMoveIndex,
  fensLength,
  enabledChessEngine,
  isReviewing,
  reviewAnalysisComplete,
  onMainLinePosition,
  analysisDataEval,
}: UsePositionAnalysisArgs) {
  const dispatch = useDispatch();
  const { engine } = useChessEngineContext();
  const positionRef = useRef(position);
  const analysisWriteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const manualAnalysisActiveRef = useRef(false);

  const [evalScore, setEvalScore] = useState<number | null>(null);
  const [bestLine, setBestLine] = useState('');
  const [bestMove, setBestMove] = useState('');
  const [manualAnalysisState, setManualAnalysisState] = useState({
    active: false,
    fenKey: '',
  });

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    return engine.subscribe((event) => {
      if (!manualAnalysisActiveRef.current) return;
      if (event.type === 'info') {
        if (event.info.eval) setEvalScore(event.info.eval.pawns);
        if (event.info.pvUci) setBestLine(event.info.pvUci.join(' '));
        if (event.info.bestMoveUci) setBestMove(event.info.bestMoveUci);
      }
      if (event.type === 'bestMove') {
        setBestMove(event.bestMoveUci);
      }
    });
  }, [engine]);

  useEffect(() => {
    engine.setEnabled(enabledChessEngine);
  }, [enabledChessEngine, engine]);

  const setupEngine = useCallback(() => {
    engine.start();
    engine.configure(ANALYSIS_ENGINE_CONFIG);
  }, [engine]);

  const cancelManualAnalysis = useCallback(
    (_reason?: string) => {
      engine.stopLiveAnalysis();
      manualAnalysisActiveRef.current = false;
      setManualAnalysisState({ active: false, fenKey: '' });
    },
    [engine],
  );

  const handleAnalyzeCurrentPosition = useCallback(() => {
    if (!enabledChessEngine) return;
    const fenToAnalyze = positionRef.current;
    const fenKey = normalizeFenKey(fenToAnalyze);
    setEvalScore(null);
    setBestLine('');
    setupEngine();
    manualAnalysisActiveRef.current = true;
    setManualAnalysisState({ active: true, fenKey });
    void engine
      .analyzePosition(fenToAnalyze, { skipCache: true })
      .then((info) => {
        if (normalizeFenKey(positionRef.current) !== fenKey) return;
        if (info.eval && Number.isFinite(info.eval.pawns)) {
          setEvalScore(info.eval.pawns);
        }
        if (info.pvUci?.length) {
          setBestLine(info.pvUci.join(' '));
        }
        if (info.bestMoveUci) {
          setBestMove(info.bestMoveUci);
        }
      })
      .catch(() => undefined)
      .finally(() => {
        if (normalizeFenKey(positionRef.current) !== fenKey) return;
        manualAnalysisActiveRef.current = false;
        setManualAnalysisState({ active: false, fenKey });
      });
  }, [enabledChessEngine, setupEngine, engine]);

  useEffect(() => {
    if (isReviewing || reviewAnalysisComplete) return;
    if (!(analysisDataEval != null && Number.isFinite(analysisDataEval))) {
      setEvalScore(null);
      setBestLine('');
    }
    // Match original AnalysisPage: only re-run on navigation / review flags.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMoveIndex, isReviewing, reviewAnalysisComplete]);

  const bestMoveUci = bestLine.trim().split(/\s+/).filter(Boolean)[0] || bestMove || '';

  useEffect(() => {
    if (reviewAnalysisComplete || isReviewing) return;
    if (!enabledChessEngine || !fensLength) return;
    if (!onMainLinePosition) return;
    if (analysisWriteTimerRef.current) clearTimeout(analysisWriteTimerRef.current);
    if (evalScore == null || !Number.isFinite(evalScore)) return;
    analysisWriteTimerRef.current = setTimeout(() => {
      dispatch(
        setPgnAnalysisAtIndex({
          index: currentMoveIndex,
          evalScore,
          bestMove: bestMoveUci,
        }),
      );
    }, 400);
    return () => {
      if (analysisWriteTimerRef.current) clearTimeout(analysisWriteTimerRef.current);
    };
  }, [
    reviewAnalysisComplete,
    isReviewing,
    enabledChessEngine,
    fensLength,
    currentMoveIndex,
    evalScore,
    bestMoveUci,
    dispatch,
    onMainLinePosition,
  ]);

  useEffect(() => {
    if (!manualAnalysisState.fenKey) return;
    if (normalizeFenKey(position) === manualAnalysisState.fenKey) return;
    if (manualAnalysisState.active) {
      cancelManualAnalysis('position changed during manual analysis');
    } else {
      setManualAnalysisState({ active: false, fenKey: '' });
    }
    setEvalScore(null);
    setBestLine('');
  }, [position, manualAnalysisState.fenKey, manualAnalysisState.active, cancelManualAnalysis]);

  useEffect(() => {
    if (!enabledChessEngine && manualAnalysisState.active) {
      cancelManualAnalysis('engine disabled');
    }
  }, [enabledChessEngine, manualAnalysisState.active, cancelManualAnalysis]);

  return {
    evalScore,
    bestLine,
    bestMove,
    bestMoveUci,
    manualAnalysisState,
    handleAnalyzeCurrentPosition,
    cancelManualAnalysis,
  };
}
