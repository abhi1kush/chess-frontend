import { useState, useEffect, useCallback, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { loadPgn } from '../redux/analysisActions';
import { parseFenPosition } from '../../pgn/services/PgnParser';

const FenOverlayButton = ({ fen }: { fen: string }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState(fen ?? '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    setDraft(fen ?? '');
    setError('');
    setCopied(false);
  }, [open, fen]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const copy = useCallback(async () => {
    const text = draft.trim() || fen || '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be denied */
    }
  }, [draft, fen]);

  const submitFen = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const typed =
      event?.currentTarget.querySelector('textarea')?.value ?? draft;
    const parsed = parseFenPosition(typed);
    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }
    dispatch(loadPgn(parsed.game));
    setDraft(parsed.game.fens[0]);
    setError('');
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="top-icon-button top-icon-button--with-tooltip fen-overlay-trigger-btn"
        onClick={() => setOpen(true)}
        data-tooltip="Load FEN"
        aria-label="Load FEN"
      >
        FEN
      </button>
      {open &&
        createPortal(
          <div
            className="fen-overlay-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fen-overlay-title"
            onClick={() => setOpen(false)}
          >
            <form className="fen-overlay-box" onClick={(e) => e.stopPropagation()} onSubmit={submitFen}>
              <h2 id="fen-overlay-title" className="fen-overlay-title">
                Load position (FEN)
              </h2>
              <textarea
                className="fen-overlay-text"
                value={draft}
                rows={3}
                spellCheck={false}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'fen-overlay-error' : undefined}
                onChange={(e) => {
                  setDraft(e.target.value);
                  if (error) setError('');
                }}
                onFocus={(e) => e.target.select()}
              />
              {error ? (
                <p id="fen-overlay-error" className="fen-overlay-error" role="alert">
                  {error}
                </p>
              ) : (
                <p className="fen-overlay-hint">
                  Paste a FEN and load it as a new game from that position.
                </p>
              )}
              <div className="fen-overlay-actions">
                <button type="button" className="action-button" onClick={copy}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button type="submit" className="action-button action-button--primary">
                  Load position
                </button>
                <button type="button" className="action-button" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>,
          document.body,
        )}
    </>
  );
};

export default FenOverlayButton;
