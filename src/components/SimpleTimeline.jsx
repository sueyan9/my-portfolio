import React, { useEffect, useMemo, useState } from "react";

const timelineData = [
  {
    time: "2008",
    icon: "✈️",
    title: "Moved to NZ",
    description: "Immigrated to New Zealand from China, started adapting to new culture and education system",
  },
  {
    time: "2021",
    icon: "🐶",
    title: "SPCA Volunteer",
    description: "Started volunteering at SPCA, participating in animal care and front desk support work",
  },
  {
    time: "2023",
    icon: "📚",
    title: "University",
    description: "Started software engineering studies at university, began academic journey in tech",
  },
  {
    time: "2023 Aug",
    icon: "💼",
    title: "First Internship",
    description: "Started first internship at a local company, gained full-stack development experience",
  },
  {
    time: "2025",
    icon: "🎓",
    title: "Graduation",
    description: "Graduated and ready to start career in software engineering field",
  },
];

const ACTIVE_ANGLE = (270 * Math.PI) / 180;
const EDGE_PADDING_SLOTS = 4;

function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

function describeArc(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, endAngle);

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;
}

export function SimpleTimeline() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1200 : window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = useMemo(() => {
    if (viewportWidth <= 640) {
      return {
        arcWidth: 720,
        arcHeight: 270,
        centerY: 900,
        radius: 870,
        startAngle: (236 * Math.PI) / 180,
        endAngle: (304 * Math.PI) / 180,
        maxWidth: "100%",
        wrapperPadding: "1.1rem 0 10.6rem",
        titleFontSize: "1.45rem",
        titleMarginBottom: "0.8rem",
        timeRadiusOffset: 92,
        majorTickDepth: 14,
        minorTickDepth: 7,
        timeOffsetY: 22,
        activeTimeSize: 20,
        inactiveTimeSize: 14,
        activeCircle: 28,
        inactiveCircle: 23,
        activeIcon: 20,
        inactiveIcon: 17,
        infoBottom: "0.4rem",
        infoWidth: "92%",
        infoTitleTop: "1rem",
        infoTitleSize: "1.15rem",
        infoBodySize: "0.94rem",
        infoBodyLineHeight: "1.55",
      };
    }

    if (viewportWidth <= 900) {
      return {
        arcWidth: 920,
        arcHeight: 300,
        centerY: 1060,
        radius: 1010,
        startAngle: (234 * Math.PI) / 180,
        endAngle: (306 * Math.PI) / 180,
        maxWidth: "100%",
        wrapperPadding: "1.5rem 0 11.2rem",
        titleFontSize: "1.65rem",
        titleMarginBottom: "1rem",
        timeRadiusOffset: 102,
        majorTickDepth: 15,
        minorTickDepth: 8,
        timeOffsetY: 20,
        activeTimeSize: 22,
        inactiveTimeSize: 16,
        activeCircle: 31,
        inactiveCircle: 26,
        activeIcon: 23,
        inactiveIcon: 19,
        infoBottom: "0.2rem",
        infoWidth: "90%",
        infoTitleTop: "1.2rem",
        infoTitleSize: "1.1rem",
        infoBodySize: "0.96rem",
        infoBodyLineHeight: "1.6",
      };
    }

    return {
      arcWidth: 1080,
      arcHeight: 320,
      centerY: 1260,
      radius: 1220,
      startAngle: (228 * Math.PI) / 180,
      endAngle: (312 * Math.PI) / 180,
      maxWidth: "1320px",
      wrapperPadding: "2.5rem 0 13.4rem",
      titleFontSize: "1.8rem",
      titleMarginBottom: "1.5rem",
      timeRadiusOffset: 130,
      majorTickDepth: 20,
      minorTickDepth: 10,
      timeOffsetY: 14,
      activeTimeSize: 24,
      inactiveTimeSize: 18,
      activeCircle: 34,
      inactiveCircle: 29,
      activeIcon: 26,
      inactiveIcon: 22,
      infoBottom: "-0.1rem",
      infoWidth: "min(520px, 88%)",
      infoTitleTop: "2.6rem",
      infoTitleSize: "1.05rem",
      infoBodySize: "1rem",
      infoBodyLineHeight: "1.7",
    };
  }, [viewportWidth]);

  const {
    arcWidth,
    arcHeight,
    centerY,
    radius,
    startAngle,
    endAngle,
    maxWidth,
    wrapperPadding,
    titleFontSize,
    titleMarginBottom,
    timeRadiusOffset,
    majorTickDepth,
    minorTickDepth,
    timeOffsetY,
    activeTimeSize,
    inactiveTimeSize,
    activeCircle,
    inactiveCircle,
    activeIcon,
    inactiveIcon,
    infoBottom,
    infoWidth,
    infoTitleTop,
    infoTitleSize,
    infoBodySize,
    infoBodyLineHeight,
  } = config;

  const centerX = arcWidth / 2;

  const baseAngles = useMemo(() => {
    const totalSlots = timelineData.length + EDGE_PADDING_SLOTS * 2;
    return timelineData.map((_, index) => {
      const slotIndex = index + EDGE_PADDING_SLOTS;
      const progress = totalSlots <= 1 ? 0.5 : slotIndex / (totalSlots - 1);
      return startAngle + (endAngle - startAngle) * progress;
    });
  }, [startAngle, endAngle]);

  const rotationOffset = ACTIVE_ANGLE - baseAngles[activeIndex];

  const arcPath = useMemo(
    () => describeArc(centerX, centerY, radius, startAngle + rotationOffset, endAngle + rotationOffset),
    [centerX, centerY, radius, startAngle, endAngle, rotationOffset]
  );

  const tickAngles = useMemo(() => {
    return Array.from({ length: 25 }, (_, index) => {
      const progress = index / 24;
      return startAngle + (endAngle - startAngle) * progress + rotationOffset;
    });
  }, [startAngle, endAngle, rotationOffset]);

  const points = useMemo(() => {
    return timelineData.map((item, index) => {
      const angle = baseAngles[index] + rotationOffset;
      const point = polarToCartesian(centerX, centerY, radius, angle);
      const timePoint = polarToCartesian(centerX, centerY, radius - timeRadiusOffset, angle);
      const iconPoint = polarToCartesian(centerX, centerY, radius + 10, angle);

      return {
        ...item,
        angle,
        point,
        timePoint,
        iconPoint,
      };
    });
  }, [baseAngles, rotationOffset, centerX, centerY, radius, timeRadiusOffset]);

  const activeItem = timelineData[activeIndex];

  return (
    <div
      style={{
        marginTop: "3rem",
        marginBottom: "0",
        width: "100%",
      }}
    >
      <h2
        style={{
          color: "#6b5cd6",
          marginBottom: titleMarginBottom,
          textAlign: "center",
          fontSize: titleFontSize,
          fontWeight: "600",
        }}
      >
        My Journey
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth,
          margin: "0 auto",
          position: "relative",
          padding: wrapperPadding,
          overflow: "hidden",
        }}
      >
        <svg
          viewBox={`0 0 ${arcWidth} ${arcHeight}`}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            overflow: "visible",
          }}
          aria-label="Journey timeline"
        >
          <path
            d={arcPath}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {tickAngles.map((angle, index) => {
            const outer = polarToCartesian(centerX, centerY, radius + 4, angle);
            const inner = polarToCartesian(
              centerX,
              centerY,
              index % 6 === 0 ? radius - majorTickDepth : radius - minorTickDepth,
              angle
            );

            return (
              <line
                key={index}
                x1={outer.x}
                y1={outer.y}
                x2={inner.x}
                y2={inner.y}
                stroke={index % 6 === 0 ? "#cfd5df" : "#e4e7ee"}
                strokeWidth={index % 6 === 0 ? "2.5" : "1.5"}
                strokeLinecap="round"
              />
            );
          })}

          {points.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <g key={item.time}>
                <line
                  x1={item.point.x}
                  y1={item.point.y}
                  x2={item.timePoint.x}
                  y2={item.timePoint.y}
                  stroke={isActive ? "#6b5cd6" : "#d1d5db"}
                  strokeWidth={isActive ? "3.5" : "2"}
                  strokeLinecap="round"
                />

                <text
                  x={item.timePoint.x}
                  y={item.timePoint.y + timeOffsetY}
                  textAnchor="middle"
                  fill={isActive ? "#6b5cd6" : "#9ca3af"}
                  fontSize={isActive ? activeTimeSize : inactiveTimeSize}
                  fontWeight={isActive ? "600" : "500"}
                  style={{ transition: "all 0.35s ease" }}
                >
                  {item.time}
                </text>

                <g
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer", transition: "all 0.35s ease" }}
                >
                  <circle
                    cx={item.iconPoint.x}
                    cy={item.iconPoint.y}
                    r={isActive ? activeCircle : inactiveCircle}
                    fill={isActive ? "#6b5cd6" : "#f8fafc"}
                    stroke={isActive ? "#6b5cd6" : "#d1d5db"}
                    strokeWidth="4"
                    style={{ transition: "all 0.25s ease" }}
                  />
                  <text
                    x={item.iconPoint.x}
                    y={item.iconPoint.y + 8}
                    textAnchor="middle"
                    fontSize={isActive ? activeIcon : inactiveIcon}
                  >
                    {item.icon}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: infoBottom,
            transform: "translateX(-50%)",
            width: infoWidth,
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#6b5cd6",
              fontSize: infoTitleSize,
              fontWeight: "600",
              marginTop: infoTitleTop,
              marginBottom: "0.75rem",
            }}
          >
            {activeItem.title}
          </div>
          <div
            style={{
              color: "#374151",
              fontSize: infoBodySize,
              lineHeight: infoBodyLineHeight,
            }}
          >
            {activeItem.description}
          </div>
        </div>
      </div>
    </div>
  );
}
