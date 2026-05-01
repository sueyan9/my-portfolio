import React, { useEffect, useRef } from "react";
import dogHero from "../assets/dog-particle-source-large.png";
import "./HeroSection.css";

const PARTICLE_RADIUS = 2.2;
const MOUSE_RADIUS = 68;
const DAMPING = 0.9;
const SPRING = 0.065;

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

  const portraitSize = Math.min(width * 0.84, height * 0.9);
  const portraitX = (width - portraitSize) / 2;
  const portraitY = (height - portraitSize) / 2;

  context.save();
  context.beginPath();
  context.roundRect(portraitX, portraitY, portraitSize, portraitSize, portraitSize * 0.16);
  context.clip();
  drawCoverImage(context, image, portraitX, portraitY, portraitSize, portraitSize);
  context.restore();

  const imageData = context.getImageData(0, 0, width, height).data;
  const particles = [];

  for (let y = 0; y < height; y += 3) {
    for (let x = 0; x < width; x += 3) {
      const index = (y * width + x) * 4;
      const red = imageData[index];
      const green = imageData[index + 1];
      const blue = imageData[index + 2];
      const alpha = imageData[index + 3];

      if (alpha < 35) {
        continue;
      }

      const brightness = (red + green + blue) / 3;
      const withinPortrait =
        x >= portraitX &&
        x <= portraitX + portraitSize &&
        y >= portraitY &&
        y <= portraitY + portraitSize;

      if (!withinPortrait || (alpha > 220 && brightness > 247)) {
        continue;
      }
      const saturation = Math.max(red, green, blue) - Math.min(red, green, blue);
      if (alpha > 220 && brightness > 228 && saturation < 18) {
        continue;
      }

      particles.push({
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
        particles = createDogParticles(width, height, image);
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
            particle.vx += (dx / distance) * force * 0.9;
            particle.vy += (dy / distance) * force * 0.9;
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
        context.shadowBlur = 10;
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
