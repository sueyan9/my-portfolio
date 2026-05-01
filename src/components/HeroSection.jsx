import React, { useEffect, useRef } from "react";
import dogHero from "../assets/dog-particle-source-large.png";
import "./HeroSection.css";

const PARTICLE_RADIUS = 2.2;
const MOUSE_RADIUS = 68;
const DAMPING = 0.9;
const SPRING = 0.065;
const DOG_GAP = 3;
const TEXT_GAP = 5;

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

  const portraitSize = Math.min(width * 0.52, height * 0.88);
  const portraitX = width * 0.02;
  const portraitY = (height - portraitSize) / 2;
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

function createTextParticles(width, height) {
  const offscreen = document.createElement("canvas");
  offscreen.width = width;
  offscreen.height = height;

  const context = offscreen.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return [];
  }

  context.clearRect(0, 0, width, height);
  context.textAlign = "left";
  context.textBaseline = "middle";

  let fontSize = Math.max(72, Math.min(150, width * 0.105));
  const textX = width * 0.52;
  const textY = height * 0.47;
  const maxTextWidth = width * 0.44;

  context.font = `700 ${fontSize}px "Georgia", "Times New Roman", serif`;
  while (context.measureText("welcome").width > maxTextWidth && fontSize > 60) {
    fontSize -= 4;
    context.font = `700 ${fontSize}px "Georgia", "Times New Roman", serif`;
  }
  context.fillStyle = "#19153a";
  context.fillText("welcome", textX, textY);

  const { data } = context.getImageData(0, 0, width, height);
  const particles = [];

  for (let y = 0; y < height; y += TEXT_GAP) {
    for (let x = 0; x < width; x += TEXT_GAP) {
      const index = (y * width + x) * 4;
      const alpha = data[index + 3];
      if (alpha < 120) {
        continue;
      }

      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];
      const brightness = (red + green + blue) / 3;

      particles.push({
        kind: "text",
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        color: brightness < 90
          ? "rgba(88, 76, 160, 0.95)"
          : `rgba(${red}, ${green}, ${blue}, 0.85)`,
        size: brightness < 90 ? 2.1 : 1.8,
        drift: Math.random() * Math.PI * 2,
      });
    }
  }

  return particles;
}

export default function HeroSection() {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
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

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = Math.floor(bounds.width);
      height = Math.floor(bounds.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (image.complete) {
        particles = [
          ...createDogParticles(width, height, image),
          ...createTextParticles(width, height),
        ];
      }
    };

    const renderParticles = (time) => {
      context.save();

      for (const particle of particles) {
        const idleX = Math.sin(time * 0.0016 + particle.drift) * 0.22;
        const idleY = Math.cos(time * 0.0012 + particle.drift) * 0.22;
        const mouse = mouseRef.current;
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            const pushStrength = particle.kind === "text" ? 0.65 : 0.9;
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
        context.shadowBlur = particle.kind === "text" ? 7 : 10;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
    };

    const render = (time = 0) => {
      context.clearRect(0, 0, width, height);

      renderParticles(time);

      context.shadowBlur = 0;
      frameRef.current = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
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
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

    return (
    <section className="hero-section">
      <div className="hero-art">
        <div className="hero-canvas-shell">
          <canvas
            ref={canvasRef}
            className="hero-particle-canvas"
            aria-label="Interactive dog particle portrait"
          />
        </div>
      </div>
    </section>
  );
}
