import {useState, useEffect} from "react";

const listeners = new Set();

export const fenRef = { current: "" };

export function setFen(newFEN) {
  fenRef.current = newFEN;
  listeners.forEach((l) => l(newFEN));
}

export function useFEN() {
  const [fen, setFenState] = useState(fenRef.current);

  useEffect(() => {
    const listener = (val) => setFenState(val);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return fen;
}