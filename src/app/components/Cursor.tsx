import { useEffect, useRef } from 'react';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top = my + 'px';
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    document.addEventListener('mousemove', onMove);

    const grow = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(2)';
      if (ringRef.current) {
        ringRef.current.style.width = '46px';
        ringRef.current.style.height = '46px';
        ringRef.current.style.borderColor = 'rgba(124,58,255,.7)';
      }
    };
    const shrink = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
      if (ringRef.current) {
        ringRef.current.style.width = '30px';
        ringRef.current.style.height = '30px';
        ringRef.current.style.borderColor = 'rgba(124,58,255,.5)';
      }
    };

    const attachToLinks = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };

    // Initial attach + re-attach on DOM changes
    attachToLinks();
    const mo = new MutationObserver(attachToLinks);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}