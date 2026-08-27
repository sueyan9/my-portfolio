import React, { useEffect, useRef } from "react";
import dogHero from "../assets/dog-particle-source-large.png";
import "./HeroSection.css";

const PARTICLE_RADIUS = 2.2;
const MOUSE_RADIUS = 68;
const DAMPING = 0.9;
const SPRING = 0.065;
const DOG_GAP = 3;
const TITLE_TEXT_GAP = 5;
const SUBTITLE_TEXT_GAP = 6;
// Below this width the title/subtitle render as real HTML text instead of
// canvas particles (mobile), so the canvas only draws the dog portrait.
const HTML_TEXT_BREAKPOINT = 680;

function drawCoverImage(context, image, targetX, targetY, targetWidth, targetHeight) {
  const imageRatio = image.width / image.height;
  const frameRatio = targetWidth / targetHeight;

  let drawWidth = targetWidth;
  let drawHeight = targetHeight;
  let offsetX = targetX;
  let offsetY = targetY;

  if (imageRatio > frameRatio) {
    drawHeight = targetHeight;
    drawWidth = targetHeight * imageRatio;
    offsetX = targetX + (targetWidth - drawWidth) / 2;
  } else {
    drawWidth = targetWidth;
    drawHeight = targetWidth / imageRatio;
    offsetY = targetY + (targetHeight - drawHeight) / 2;
  }

  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

function createDogParticles(width, height, image) {
  const offscreen = document.createElement("canvas");
  offscreen.width = width;
  offscreen.height = height;

  const context = offscreen.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return [];
  }

  context.fillStyle = "#020403";
  context.fillRect(0, 0, width, height);

  const isCompact = width < 900;
  const isMobile = width < HTML_TEXT_BREAKPOINT;
  const portraitSize = isMobile
    ? Math.min(width * 0.72, height * 0.82)
    : isCompact
      ? Math.min(width * 0.76, height * 0.42)
      : Math.min(width * 0.5, height * 0.9);
  const portraitX = isCompact ? (width - portraitSize) / 2 : width * 0.03;
  const portraitY = isMobile
    ? (height - portraitSize) / 2
    : isCompact
      ? height * 0.08
      : (height - portraitSize) / 2;
  const portraitCenterX = portraitX + portraitSize * 0.48;
  const portraitCenterY = portraitY + portraitSize * 0.5;
  const portraitRadiusX = portraitSize * 0.38;
  const portraitRadiusY = portraitSize * 0.44;

  context.save();
  context.beginPath();
  context.roundRect(portraitX, portraitY, portraitSize, portraitSize, portraitSize * 0.16);
  context.clip();
  drawCoverImage(context, image, portraitX, portraitY, portraitSize, portraitSize);
  context.restore();

  const imageData = context.getImageData(0, 0, width, height).data;
  const particles = [];

  for (let y = 0; y < height; y += DOG_GAP) {
    for (let x = 0; x < width; x += DOG_GAP) {
      const index = (y * width + x) * 4;
      const red = imageData[index];
      const green = imageData[index + 1];
      const blue = imageData[index + 2];
      const alpha = imageData[index + 3];

      if (alpha < 35) {
        continue;
      }

      const isDark = red < 40 && green < 40 && blue < 40;
      if (isDark) {
        continue;
      }

      const brightness = (red + green + blue) / 3;
      const withinPortrait =
        x >= portraitX &&
        x <= portraitX + portraitSize &&
        y >= portraitY &&
        y <= portraitY + portraitSize;
      const normalizedX = (x - portraitCenterX) / portraitRadiusX;
      const normalizedY = (y - portraitCenterY) / portraitRadiusY;
      const withinDogShape = normalizedX * normalizedX + normalizedY * normalizedY <= 1.12;
      const localX = (x - portraitX) / portraitSize;
      const localY = (y - portraitY) / portraitSize;
      const inCornerCutout =
        (localX < 0.12 && localY < 0.12) ||
        (localX > 0.88 && localY < 0.12) ||
        (localX < 0.12 && localY > 0.88) ||
        (localX > 0.88 && localY > 0.88);

      if (!withinPortrait || !withinDogShape || inCornerCutout || (alpha > 220 && brightness > 247)) {
        continue;
      }
      const saturation = Math.max(red, green, blue) - Math.min(red, green, blue);
      if ((alpha > 220 && brightness > 228 && saturation < 18) || brightness < 32) {
        continue;
      }

      particles.push({
        kind: "dog",
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        color: `rgba(${red}, ${green}, ${blue}, 0.94)`,
        size: brightness > 210 ? PARTICLE_RADIUS : brightness > 165 ? 2.35 : 2.6,
        drift: Math.random() * Math.PI * 2,
      });
    }
  }

  return particles;
}

function createTextParticles(width, height, { title, subtitle }) {
  const makeContext = () => {
    const layer = document.createElement("canvas");
    layer.width = width;
    layer.height = height;
    return layer.getContext("2d", { willReadFrequently: true });
  };

  const titleContext = makeContext();
  const subtitleContext = makeContext();

  if (!titleContext || !subtitleContext) {
    return [];
  }

  const isCompact = width < 900;
  const textX = isCompact ? width * 0.08 : width * 0.56;
  const textWidth = isCompact ? width * 0.84 : width * 0.38;
  let titleSize = isCompact
    ? Math.max(42, Math.min(84, width * 0.08))
    : Math.max(68, Math.min(136, width * 0.082));
  let bodySize = isCompact
    ? Math.max(32, Math.min(52, width * 0.052))
    : Math.max(48, Math.min(74, width * 0.05));

  const fitText = (drawContext, fontWeight, fontFamily, initialSize, content, maxWidth) => {
    let size = initialSize;
    drawContext.font = `${fontWeight} ${size}px ${fontFamily}`;
    while (drawContext.measureText(content).width > maxWidth && size > 18) {
      size -= 2;
      drawContext.font = `${fontWeight} ${size}px ${fontFamily}`;
    }
    return size;
  };

  titleSize = fitText(titleContext, '700', '"Georgia", "Times New Roman", serif', titleSize, title, textWidth);
  bodySize = fitText(subtitleContext, '700', '"Helvetica Neue", Arial, sans-serif', bodySize, subtitle, textWidth);

  const titleY = isCompact ? height * 0.62 : height * 0.43;
  const bodyY = titleY + titleSize * 1.16;
  const particles = [];

  const sampleTextLayer = (drawContext, text, y, options) => {
    drawContext.clearRect(0, 0, width, height);
    drawContext.textAlign = "left";
    drawContext.textBaseline = "middle";
    drawContext.font = options.font;
    drawContext.fillStyle = options.fill;
    drawContext.fillText(text, textX, y);

    const { data } = drawContext.getImageData(0, 0, width, height);

    for (let py = 0; py < height; py += options.gap) {
      for (let px = 0; px < width; px += options.gap) {
        const index = (py * width + px) * 4;
        const alpha = data[index + 3];
        if (alpha < 80) {
          continue;
        }

        particles.push({
          kind: "text",
          x: px,
          y: py,
          baseX: px,
          baseY: py,
          vx: 0,
          vy: 0,
          color: options.color,
          size: options.size,
          drift: Math.random() * Math.PI * 2 * options.driftScale,
        });
      }
    }
  };

  sampleTextLayer(titleContext, title, titleY, {
    font: `700 ${titleSize}px "Georgia", "Times New Roman", serif`,
    fill: "#3a1d6e",
    color: "rgba(58, 29, 110, 0.98)",
    gap: TITLE_TEXT_GAP,
    size: 2.45,
    driftScale: 1,
  });

  sampleTextLayer(subtitleContext, subtitle, bodyY, {
    font: `700 ${bodySize}px "Helvetica Neue", Arial, sans-serif`,
    fill: "#5e4a86",
    color: "rgba(94, 74, 134, 0.98)",
    gap: SUBTITLE_TEXT_GAP,
    size: 3.2,
    driftScale: 0.6,
  });

  return particles;
}

export default function HeroSection() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const image = new Image();
    image.src = dogHero;

    let particles = [];
    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let isTextHovered = false;

    const greetingCopy = {
      title: "Hello, welcome.",
      subtitle: "Move closer — the dots have a story to tell.",
    };
    const hoverCopies = [
      { title: "Kia ora.", subtitle: "" },
      { title: "No sheep here.", subtitle: "" },
      { title: "You found me.", subtitle: "" },
    ];
    let textSequenceTimers = [];

    const replaceTextParticles = (copy) => {
      if (width < HTML_TEXT_BREAKPOINT) {
        return;
      }

      const departingParticles = particles
        .filter((particle) => particle.kind === "text" && !particle.isLeaving)
        .map((particle) => ({
          ...particle,
          isLeaving: true,
          opacity: particle.opacity ?? 1,
          vx: particle.vx + (Math.random() - 0.5) * 4,
          vy: particle.vy + (Math.random() - 0.5) * 4,
        }));
      const nextParticles = createTextParticles(
        width,
        height,
        copy,
      ).map((particle) => ({
        ...particle,
        x: particle.x + (Math.random() - 0.5) * 46,
        y: particle.y + (Math.random() - 0.5) * 34,
        opacity: 0,
        isAppearing: true,
      }));

      particles = [
        ...particles.filter((particle) => particle.kind === "dog" || particle.isLeaving),
        ...departingParticles,
        ...nextParticles,
      ];
    };

    const clearTextSequence = () => {
      textSequenceTimers.forEach((timer) => window.clearTimeout(timer));
      textSequenceTimers = [];
    };

    const playTextSequence = () => {
      clearTextSequence();
      replaceTextParticles(hoverCopies[0]);
      hoverCopies.slice(1).forEach((copy, index) => {
        textSequenceTimers.push(
          window.setTimeout(() => {
            if (isTextHovered) {
              replaceTextParticles(copy);
            }
          }, (index + 1) * 950),
        );
      });
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = Math.floor(bounds.width);
      height = Math.floor(bounds.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (image.complete) {
        particles = [...createDogParticles(width, height, image)];
        if (width >= HTML_TEXT_BREAKPOINT) {
          particles.push(...createTextParticles(width, height, greetingCopy));
        }
      }
    };

    const renderParticles = (time) => {
      context.save();

      for (const particle of particles) {
        if (particle.isLeaving) {
          particle.opacity -= 0.035;
          if (particle.opacity <= 0) {
            continue;
          }
        } else if (particle.isAppearing) {
          particle.opacity = Math.min(1, particle.opacity + 0.075);
          if (particle.opacity === 1) {
            particle.isAppearing = false;
          }
        }

        const idleX = Math.sin(time * 0.0016 + particle.drift) * 0.22;
        const idleY = Math.cos(time * 0.0012 + particle.drift) * 0.22;
        const mouse = mouseRef.current;
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            const pushStrength = particle.kind === "text" ? 0.62 : 0.9;
            particle.vx += (dx / distance) * force * pushStrength;
            particle.vy += (dy / distance) * force * pushStrength;
          }
        }

        particle.vx += (particle.baseX + idleX - particle.x) * SPRING;
        particle.vy += (particle.baseY + idleY - particle.y) * SPRING;
        particle.vx *= DAMPING;
        particle.vy *= DAMPING;
        particle.x += particle.vx;
        particle.y += particle.vy;

        context.fillStyle = particle.color;
        context.shadowColor = particle.color;
        context.shadowBlur = particle.kind === "text" ? 5 : 9;
        context.globalAlpha = particle.opacity ?? 1;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      particles = particles.filter((particle) => !particle.isLeaving || particle.opacity > 0);
      context.globalAlpha = 1;

      context.restore();
    };

    const render = (time = 0) => {
      context.clearRect(0, 0, width, height);

      renderParticles(time);

      context.shadowBlur = 0;
      animationFrameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        active: true,
      };

      const isOverText =
        width >= HTML_TEXT_BREAKPOINT &&
        mouseRef.current.x >= width * 0.4 &&
        mouseRef.current.y >= height * 0.05 &&
        mouseRef.current.y <= height * 0.92;
      if (isOverText !== isTextHovered) {
        isTextHovered = isOverText;
        if (isTextHovered) {
          playTextSequence();
        } else {
          clearTextSequence();
          replaceTextParticles(greetingCopy);
        }
      }
    };

    const handlePointerDown = (event) => {
      const bounds = canvas.getBoundingClientRect();
      const isOverText =
        width >= HTML_TEXT_BREAKPOINT &&
        event.clientX - bounds.left >= width * 0.4;
      if (isOverText) {
        isTextHovered = !isTextHovered;
        if (isTextHovered) {
          playTextSequence();
        } else {
          clearTextSequence();
          replaceTextParticles(greetingCopy);
        }
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
      if (isTextHovered) {
        isTextHovered = false;
        clearTextSequence();
        replaceTextParticles(greetingCopy);
      }
    };

    let animationStarted = false;
    const start = () => {
      resize();
      if (!animationStarted) {
        animationStarted = true;
        render();
      }
    };

    image.onload = start;

    if (image.complete) {
      start();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    resizeObserver.observe(canvas);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      clearTextSequence();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-art-card">
        <div className="hero-canvas-shell">
          <canvas
            ref={canvasRef}
            className="hero-particle-canvas"
            aria-label="Interactive dog particle portrait and text"
          />
        </div>
        <div className="hero-text-html">
          <h1 className="hero-text-html__title">Hello, welcome.</h1>
          <p className="hero-text-html__subtitle">Move closer — the dots have a story to tell.</p>
        </div>
      </div>
    </section>
  );
}
