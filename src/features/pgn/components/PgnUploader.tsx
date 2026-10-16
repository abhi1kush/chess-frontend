import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { loadPgnFromText, looksLikePgn } from '../services/loadPgnText';

// Pure function to read file content
const readFileContent = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      resolve(e.target?.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

const PgnUploader = () => {
  const dispatch = useDispatch();
  const [isPasteDialogOpen, setIsPasteDialogOpen] = useState(false);
  const [pastedPgnText, setPastedPgnText] = useState('');
  const [pgnErrorMessage, setPgnErrorMessage] = useState('');
  const [uploadErrorMessage, setUploadErrorMessage] = useState('');

  const closePasteDialog = () => {
    setIsPasteDialogOpen(false);
    setPgnErrorMessage('');
  };

  const openPasteDialog = (initialPgnText = '') => {
    setPastedPgnText(initialPgnText);
    setPgnErrorMessage('');
    setIsPasteDialogOpen(true);
  };

  // Escape closes the dialog.
  useEffect(() => {
    if (!isPasteDialogOpen) return;
    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === 'Escape') closePasteDialog();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPasteDialogOpen]);

  // Ctrl+V / Cmd+V of PGN text anywhere on the page (outside inputs) loads the game.
  useEffect(() => {
    const handlePagePaste = (clipboardEvent: ClipboardEvent) => {
      if (isPasteDialogOpen) return;
      const focusedElement = document.activeElement as HTMLElement | null;
      const isTypingInField =
        focusedElement &&
        (focusedElement.tagName === 'INPUT' ||
          focusedElement.tagName === 'TEXTAREA' ||
          focusedElement.isContentEditable);
      if (isTypingInField) return;
      const clipboardText = clipboardEvent.clipboardData?.getData('text') ?? '';
      if (!looksLikePgn(clipboardText)) return;
      clipboardEvent.preventDefault();
      const parseResult = loadPgnFromText(dispatch, clipboardText);
      if (!parseResult.ok) {
        // Show the text in the dialog so the user sees the error and can fix it.
        setPastedPgnText(clipboardText);
        setPgnErrorMessage(parseResult.error);
        setIsPasteDialogOpen(true);
      }
    };
    document.addEventListener('paste', handlePagePaste);
    return () => document.removeEventListener('paste', handlePagePaste);
  }, [dispatch, isPasteDialogOpen]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const selectedFile = fileInput.files?.[0];
    if (!selectedFile) {
      return;
    }

    readFileContent(selectedFile)
      .then((pgnFileText) => {
        const parseResult = loadPgnFromText(dispatch, pgnFileText);
        if (!parseResult.ok) {
          setUploadErrorMessage(`${selectedFile.name}: ${parseResult.error}`);
        }
      })
      .catch((readError) => {
        console.error('Error reading PGN file:', readError);
        setUploadErrorMessage(`Could not read ${selectedFile.name}.`);
      })
      .finally(() => {
        // Allow re-selecting the same file.
        fileInput.value = '';
      });
  };

  const handlePasteSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    const parseResult = loadPgnFromText(dispatch, pastedPgnText);
    if (!parseResult.ok) {
      setPgnErrorMessage(parseResult.error);
      return;
    }
    setPastedPgnText('');
    closePasteDialog();
  };

  return (
    <>
      <label
        className="top-icon-button top-icon-button--with-tooltip"
        data-tooltip="Upload PGN"
        aria-label="Upload PGN"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M11.47 3.22a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06l-2.47-2.47v7.69a.75.75 0 0 1-1.5 0V5.56L8.78 8.03a.75.75 0 1 1-1.06-1.06l3.75-3.75Zm-6.22 10.53a.75.75 0 0 1 .75.75v2A1.25 1.25 0 0 0 7.25 17.75h9.5A1.25 1.25 0 0 0 18 16.5v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75h-9.5A2.75 2.75 0 0 1 4.5 16.5v-2a.75.75 0 0 1 .75-.75Z"
          />
        </svg>
        <input type="file" accept=".pgn,text/plain" onChange={handleFileUpload} hidden />
      </label>

      <button
        type="button"
        className="top-icon-button top-icon-button--with-tooltip"
        data-tooltip="Paste PGN"
        aria-label="Paste PGN"
        onClick={() => openPasteDialog()}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M9 2.75A1.75 1.75 0 0 0 7.25 4.5H6.5A2.5 2.5 0 0 0 4 7v12.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5h-.75A1.75 1.75 0 0 0 15 2.75H9Zm0 1.5h6a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25H9a.25.25 0 0 1-.25-.25v-1A.25.25 0 0 1 9 4.25ZM8 10.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5Zm0 4h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5Z"
          />
        </svg>
      </button>

      {uploadErrorMessage &&
        createPortal(
          <div className="pgn-upload-toast" role="alert">
            <span>{uploadErrorMessage}</span>
            <button type="button" aria-label="Dismiss" onClick={() => setUploadErrorMessage('')}>
              ×
            </button>
          </div>,
          document.body,
        )}

      {isPasteDialogOpen &&
        createPortal(
          <div
            className="fen-overlay-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="paste-pgn-title"
            onClick={closePasteDialog}
          >
            <form
              className="fen-overlay-box"
              onClick={(clickEvent) => clickEvent.stopPropagation()}
              onSubmit={handlePasteSubmit}
            >
              <h2 id="paste-pgn-title" className="fen-overlay-title">
                Paste PGN
              </h2>
              <textarea
                className="fen-overlay-text paste-pgn-textarea"
                value={pastedPgnText}
                rows={10}
                spellCheck={false}
                autoFocus
                placeholder={'[White "..."]\n[Black "..."]\n\n1. e4 e5 2. Nf3 ...'}
                aria-invalid={Boolean(pgnErrorMessage)}
                aria-describedby={pgnErrorMessage ? 'paste-pgn-error' : undefined}
                onChange={(changeEvent) => {
                  setPastedPgnText(changeEvent.target.value);
                  if (pgnErrorMessage) setPgnErrorMessage('');
                }}
              />
              {pgnErrorMessage ? (
                <p id="paste-pgn-error" className="fen-overlay-error" role="alert">
                  {pgnErrorMessage}
                </p>
              ) : (
                <p className="fen-overlay-hint">
                  Paste a full game (headers optional). Tip: Ctrl+V anywhere on the page also works.
                </p>
              )}
              <div className="fen-overlay-actions">
                <button type="submit" className="action-button action-button--primary">
                  Load
                </button>
                <button type="button" className="action-button" onClick={closePasteDialog}>
                  Cancel
                </button>
              </div>
            </form>
          </div>,
          document.body,
        )}
    </>
  );
};

export default PgnUploader;
