import {useState, useEffect} from "react";

type FenListener = (newFEN: string) => void;

// useFEN.js
const listeners = new Set<FenListener>();

export const fenRef = { current: "" };

export function setFen(newFEN: string) {
  fenRef.current = newFEN;
  listeners.forEach((l) => l(newFEN));
}

export function useFEN(): string {
  const [fen, setFenState] = useState(fenRef.current);

  useEffect(() => {
    const listener = (val: string) => setFenState(val);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return fen;
}