import React, { useMemo, useState } from "react";

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

const ARC_WIDTH = 1080;
const ARC_HEIGHT = 260;
const CENTER_X = ARC_WIDTH / 2;
const CENTER_Y = -250;
const RADIUS = 560;
const START_ANGLE = (52 * Math.PI) / 180;
const END_ANGLE = (128 * Math.PI) / 180;

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

  const arcPath = useMemo(
    () => describeArc(CENTER_X, CENTER_Y, RADIUS, START_ANGLE, END_ANGLE),
    []
  );

  const tickAngles = useMemo(() => {
    return Array.from({ length: 25 }, (_, index) => {
      const progress = index / 24;
      return START_ANGLE + (END_ANGLE - START_ANGLE) * progress;
    });
  }, []);

  const points = useMemo(() => {
    return timelineData.map((item, index) => {
      const progress = timelineData.length === 1 ? 0.5 : index / (timelineData.length - 1);
      const angle = START_ANGLE + (END_ANGLE - START_ANGLE) * progress;
      const point = polarToCartesian(CENTER_X, CENTER_Y, RADIUS, angle);
      const timePoint = polarToCartesian(CENTER_X, CENTER_Y, RADIUS - 62, angle);
      const iconPoint = polarToCartesian(CENTER_X, CENTER_Y, RADIUS + 10, angle);

      return {
        ...item,
        angle,
        point,
        timePoint,
        iconPoint,
      };
    });
  }, []);

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
          marginBottom: "1.5rem",
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
        }}
      >
        My Journey
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          padding: "0 0 11rem",
        }}
      >
        <svg
          viewBox={`0 0 ${ARC_WIDTH} ${ARC_HEIGHT}`}
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
            const outer = polarToCartesian(CENTER_X, CENTER_Y, RADIUS + 4, angle);
            const inner = polarToCartesian(
              CENTER_X,
              CENTER_Y,
              index % 6 === 0 ? RADIUS - 18 : RADIUS - 8,
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
                  strokeWidth={isActive ? "4" : "2.5"}
                  strokeLinecap="round"
                />

                <text
                  x={item.timePoint.x}
                  y={item.timePoint.y - 14}
                  textAnchor="middle"
                  fill={isActive ? "#6b5cd6" : "#9ca3af"}
                  fontSize={isActive ? "24" : "18"}
                  fontWeight={isActive ? "600" : "500"}
                  transform={`rotate(${((item.angle - Math.PI / 2) * 180) / Math.PI} ${item.timePoint.x} ${item.timePoint.y - 14})`}
                >
                  {item.time}
                </text>

                <g
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={item.iconPoint.x}
                    cy={item.iconPoint.y}
                    r={isActive ? "34" : "29"}
                    fill={isActive ? "#6b5cd6" : "#f8fafc"}
                    stroke={isActive ? "#6b5cd6" : "#d1d5db"}
                    strokeWidth="4"
                    style={{ transition: "all 0.25s ease" }}
                  />
                  <text
                    x={item.iconPoint.x}
                    y={item.iconPoint.y + 8}
                    textAnchor="middle"
                    fontSize={isActive ? "26" : "22"}
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
            bottom: "1.2rem",
            transform: "translateX(-50%)",
            width: "min(520px, 88%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#6b5cd6",
              fontSize: "1.05rem",
              fontWeight: "600",
              marginBottom: "0.65rem",
            }}
          >
            {activeItem.title}
          </div>
          <div
            style={{
              color: "#374151",
              fontSize: "1rem",
              lineHeight: "1.7",
            }}
          >
            {activeItem.description}
          </div>
        </div>
      </div>
    </div>
  );
}
