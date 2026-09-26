import { useEffect, type RefObject } from 'react';

export function useMoveListScroll(
  scrollRef: RefObject<HTMLDivElement | null>,
  moves: string[] | undefined,
  currentMoveIndex: number,
) {
  useEffect(() => {
    if (scrollRef.current && moves?.length) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [moves, scrollRef]);

  /** Row `<tr>` uses `move-row-${index}` for map index 0,2,4,… — not `currentMoveIndex`. */
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    if (currentMoveIndex <= 0) {
      scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const rowAnchor =
      currentMoveIndex >= 1
        ? 2 * Math.floor((currentMoveIndex - 1) / 2)
        : 0;
    const row = scrollEl.querySelector(`.move-row-${rowAnchor}`);
    if (!row) return;

    const scrollRowIntoView = () => {
      const thead = scrollEl.querySelector('thead');
      const stickyHeaderH = thead ? thead.offsetHeight : 0;
      const pad = 2;
      const rowTop =
        row.getBoundingClientRect().top -
        scrollEl.getBoundingClientRect().top +
        scrollEl.scrollTop;
      const targetTop = Math.max(0, rowTop - stickyHeaderH - pad);
      scrollEl.scrollTo({ top: targetTop, behavior: 'smooth' });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollRowIntoView);
    });
  }, [currentMoveIndex, scrollRef]);
}
