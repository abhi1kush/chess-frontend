import { useCallback, useEffect, useRef, useState } from "react";
import { useStockfishContext } from "../context/StockfishContext";
import { onMessage } from "../utils/onMessage";

const STOCKFISH_OPTIONS = [
  { name: "Threads", value: 1 },
  { name: "Hash", value: 16 },
  { name: "MultiPV", value: 1 },
];

const ANALYSIS_MS = 8200;

export function useBoardEditorAnalysis(
  isValidFen: boolean,
  generateFenFromBoard: () => string
) {
  const [evalScore, setEvalScore] = useState<number | null>(null);
  const [bestLine, setBestLine] = useState<string>("");
  const [bestMoveUci, setBestMoveUci] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string>("");

  const fenRef = useRef("");
  const analysisDoneTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    initEngine,
    setOptions,
    startSearch,
    stopSearch,
    setOnMessage,
    syncEnabledState,
  } = useStockfishContext();

  const handleEngineMessage = useCallback((data: unknown) => {
    if (typeof data !== "string") return;
    onMessage(data, setEvalScore, setBestLine, fenRef.current, setBestMoveUci);
  }, []);

  useEffect(() => {
    try {
      fenRef.current = generateFenFromBoard();
    } catch {
      /* ignore */
    }
  }, [generateFenFromBoard]);

  const handleStopAnalysis = useCallback(() => {
    if (analysisDoneTimerRef.current) {
      clearTimeout(analysisDoneTimerRef.current);
      analysisDoneTimerRef.current = null;
    }
    setIsAnalyzing(false);
    stopSearch("board editor analyse stop");
  }, [stopSearch]);

  const handleAnalyse = useCallback(() => {
    if (!isValidFen) {
      setAnalysisError("Fix the position before analysing.");
      return;
    }
    const fen = generateFenFromBoard();
    fenRef.current = fen;
    setAnalysisError("");
    setEvalScore(null);
    setBestLine("");
    setBestMoveUci("");
    setIsAnalyzing(true);

    if (analysisDoneTimerRef.current) {
      clearTimeout(analysisDoneTimerRef.current);
      analysisDoneTimerRef.current = null;
    }

    stopSearch("board editor analyse restart");
    syncEnabledState(true);
    initEngine();
    setOptions(STOCKFISH_OPTIONS);
    setOnMessage(handleEngineMessage);
    startSearch(fen);

    analysisDoneTimerRef.current = setTimeout(() => {
      setIsAnalyzing(false);
      stopSearch("board editor analyse complete");
      analysisDoneTimerRef.current = null;
    }, ANALYSIS_MS);
  }, [
    isValidFen,
    generateFenFromBoard,
    stopSearch,
    syncEnabledState,
    initEngine,
    setOptions,
    setOnMessage,
    handleEngineMessage,
    startSearch,
  ]);

  useEffect(() => {
    return () => {
      if (analysisDoneTimerRef.current) clearTimeout(analysisDoneTimerRef.current);
      stopSearch("board editor unmount");
      syncEnabledState(false);
    };
  }, [stopSearch, syncEnabledState]);

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
