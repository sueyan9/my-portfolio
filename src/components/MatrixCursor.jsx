import { useEffect, useRef } from 'react';

const GLYPHS = ['1011', 'SYS', 'RED', 'WAKE', 'NEO', 'ZX'];

export default function MatrixCursor() {
  const capsuleRef = useRef(null);
  const auraRef = useRef(null);
  const glyphRef = useRef(null);
  const frameRef = useRef(0);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);
  const pressedRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return undefined;
    }

    const capsule = capsuleRef.current;
    const aura = auraRef.current;
    const glyph = glyphRef.current;

    if (!capsule || !aura || !glyph) {
      return undefined;
    }

    let glyphIndex = 0;

    const render = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      const scale = hoveringRef.current ? 1.15 : 1;
      const auraScale = pressedRef.current ? 0.92 : hoveringRef.current ? 1.2 : 1;
      capsule.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%) rotate(32deg) scale(${scale})`;
      aura.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${auraScale})`;
      glyph.style.transform = `translate3d(${current.x + 18}px, ${current.y - 18}px, 0) translate(-50%, -50%)`;

      frameRef.current = window.requestAnimationFrame(render);
    };

    const updateHoverState = (target) => {
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, summary, [role="button"], [data-cursor="interactive"]')
      );

      hoveringRef.current = isInteractive;
      capsule.dataset.hover = String(isInteractive);
      aura.dataset.hover = String(isInteractive);
    };

    const handleMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      updateHoverState(event.target);
    };

    const handleDown = () => {
      pressedRef.current = true;
      capsule.dataset.pressed = 'true';
      aura.dataset.pressed = 'true';
      glyph.textContent = 'JACK IN';
    };

    const handleUp = () => {
      pressedRef.current = false;
      capsule.dataset.pressed = 'false';
      aura.dataset.pressed = 'false';
      glyph.textContent = GLYPHS[glyphIndex % GLYPHS.length];
    };

    const handleLeave = () => {
      capsule.dataset.visible = 'false';
      aura.dataset.visible = 'false';
      glyph.dataset.visible = 'false';
    };

    const handleEnter = () => {
      capsule.dataset.visible = 'true';
      aura.dataset.visible = 'true';
      glyph.dataset.visible = 'true';
    };

    const cycleGlyph = window.setInterval(() => {
      glyphIndex += 1;
      glyph.textContent = hoveringRef.current ? 'FOLLOW' : GLYPHS[glyphIndex % GLYPHS.length];
    }, 1200);

    handleEnter();
    glyph.textContent = GLYPHS[0];
    frameRef.current = window.requestAnimationFrame(render);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseout', handleLeave);
    window.addEventListener('mouseover', handleEnter);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.clearInterval(cycleGlyph);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseout', handleLeave);
      window.removeEventListener('mouseover', handleEnter);
    };
  }, []);

  return (
    <div className="matrix-cursor-layer" aria-hidden="true">
      <div ref={auraRef} className="matrix-cursor-aura" data-visible="false" data-hover="false" data-pressed="false" />
      <div ref={capsuleRef} className="matrix-cursor-capsule" data-visible="false" data-hover="false" data-pressed="false">
        <span className="matrix-cursor-capsule__half matrix-cursor-capsule__half--red" />
        <span className="matrix-cursor-capsule__half matrix-cursor-capsule__half--red-deep" />
        <span className="matrix-cursor-capsule__shine" />
      </div>
      <div ref={glyphRef} className="matrix-cursor-glyph" data-visible="false" />
    </div>
  );
}
