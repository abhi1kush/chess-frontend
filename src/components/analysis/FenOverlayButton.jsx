import { useState, useEffect, useCallback } from 'react';

/**
 * Opens a modal with the current FEN and a copy action.
 * @param {{ fen: string }} props
 */
const FenOverlayButton = ({ fen }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const copy = useCallback(async () => {
    const text = fen ?? '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be denied */
    }
  }, [fen]);

  return (
    <>
      <button type="button" className="action-button" onClick={() => setOpen(true)}>
        FEN
      </button>
      {open && (
        <div
          className="fen-overlay-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fen-overlay-title"
          onClick={() => setOpen(false)}
        >
          <div className="fen-overlay-box" onClick={(e) => e.stopPropagation()}>
            <h2 id="fen-overlay-title" className="fen-overlay-title">
              Position (FEN)
            </h2>
            <textarea
              readOnly
              className="fen-overlay-text"
              value={fen ?? ''}
              rows={3}
              onFocus={(e) => e.target.select()}
            />
            <div className="fen-overlay-actions">
              <button type="button" className="action-button" onClick={copy}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button type="button" className="action-button" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FenOverlayButton;
