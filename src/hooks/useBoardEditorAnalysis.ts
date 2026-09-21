import { useCallback, useEffect, useRef, useState } from "react";
import { useChessEngineContext } from "../engine/react/EngineProvider";

export function useBoardEditorAnalysis(
  isValidFen: boolean,
  generateFenFromBoard: () => string
) {
  const [evalScore, setEvalScore] = useState<number>(0);
  const [bestLine, setBestLine] = useState<string>("");
  const [bestMoveUci, setBestMoveUci] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string>("");

  const fenRef = useRef("");
  const analyzingRef = useRef(false);

  const { engine } = useChessEngineContext();

  useEffect(() => {
    return engine.subscribe((event) => {
      if (!analyzingRef.current) {
        return;
      }
      if (event.type === 'info') {
        if (event.info.eval) {
          setEvalScore(event.info.eval.pawns);
        }
        if (event.info.pvUci) {
          setBestLine(event.info.pvUci.join(' '));
        }
        if (event.info.bestMoveUci) {
          setBestMoveUci(event.info.bestMoveUci);
        }
      }
      if (event.type === 'bestMove') {
        setBestMoveUci(event.bestMoveUci);
      }
    });
  }, [engine]);

  useEffect(() => {
    try {
      fenRef.current = generateFenFromBoard();
    } catch {
      /* ignore */
    }
  }, [generateFenFromBoard]);

  const handleStopAnalysis = useCallback(() => {
    analyzingRef.current = false;
    setIsAnalyzing(false);
    engine.stopLiveAnalysis();
  }, [engine]);

  const handleAnalyse = useCallback(() => {
    if (!isValidFen) {
      setAnalysisError("Fix the position before analysing.");
      return;
    }
    const fen = generateFenFromBoard();
    fenRef.current = fen;
    setAnalysisError("");
    setEvalScore(0);
    setBestLine("");
    setBestMoveUci("");
    analyzingRef.current = true;
    setIsAnalyzing(true);

    engine.setEnabled(true);
    engine.start();
    engine.configure({ threads: 1, hashMb: 16, multiPv: 1 });
    void engine
      .analyzePosition(fen, { skipCache: true })
      .catch(() => undefined)
      .finally(() => {
        analyzingRef.current = false;
        setIsAnalyzing(false);
      });
  }, [isValidFen, generateFenFromBoard, engine]);

  useEffect(() => {
    return () => {
      analyzingRef.current = false;
      engine.stopLiveAnalysis();
      engine.setEnabled(false);
    };
  }, [engine]);

  return {
    evalScore,
    bestLine,
    bestMoveUci,
    isAnalyzing,
    analysisError,
    handleAnalyse,
    handleStopAnalysis,
    fenRef,
  };
}
