import React, { useEffect, useMemo, useState } from "react";
import {
  Plane,
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  LaptopMinimal,
} from "lucide-react";
const timelineData = [
  {
    time: "2008",
    icon: Plane,
    title: "A New Beginning",
    description:
        "Moved from China to New Zealand and began adapting to a new culture, language, and education system.",
  },
  {
    time: "2021",
    icon: HeartHandshake,
    title: "Community Service",
    description:
        "Volunteered at SPCA, supporting animal care while giving back to the local community.",
  },
  {
    time: "2023",
    icon: GraduationCap,
    title: "Software Engineering",
    description:
        "Began studying Software Engineering and started turning curiosity into real software projects.",
  },
  {
    time: "2023 Aug",
    icon: BriefcaseBusiness,
    title: "Industry Experience",
    description:
        "Joined my first software internship and started building production applications with a development team.",
  },
  {
    time: "2025",
    icon: Award,
    title: "A New Chapter",
    description:
        "Completed my university journey and stepped into professional software development.",
  },
  {
    time: "2026",
    icon: LaptopMinimal,
    title: "Software Developer · Rongo Lab",
    description:
        "Working directly with clients to design and deliver end-to-end software solutions, including HealthTech platforms, ERP/CRM systems, Shopify integrations, and AI-powered workflow automation.",
  },
];

const ACTIVE_ANGLE = (270* Math.PI) / 180;
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
  const [activeIndex, setActiveIndex] = useState(timelineData.length - 1);
  const [hasInteracted, setHasInteracted] = useState(false);
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
  const rotationOffset = hasInteracted
      ? ACTIVE_ANGLE - baseAngles[activeIndex]
      : 0;
  //const rotationOffset = ACTIVE_ANGLE - baseAngles[activeIndex];

  const arcPath = useMemo(
    () => describeArc(centerX, centerY, radius, startAngle + rotationOffset, endAngle + rotationOffset),
    [centerX, centerY, radius, startAngle, endAngle, rotationOffset]
  );

  const tickAngles = useMemo(() => {
    return Array.from({ length: 49 }, (_, index) => {
      const progress = index / 48;
      return startAngle + (endAngle - startAngle) * progress + rotationOffset;
    });
  }, [startAngle, endAngle, rotationOffset]);

  const decorStars = useMemo(
    () => [
      { tick: 5, radiusOffset: 58, size: 9, opacity: 0.5 },
      { tick: 11, radiusOffset: 132, size: 7, opacity: 0.38 },
      { tick: 17, radiusOffset: 48, size: 8, opacity: 0.55 },
      { tick: 31, radiusOffset: 112, size: 7, opacity: 0.4 },
      { tick: 37, radiusOffset: 64, size: 9, opacity: 0.5 },
      { tick: 43, radiusOffset: 150, size: 6, opacity: 0.32 },
    ],
    []
  );

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
            stroke="#e7e3f1"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d={arcPath}
            fill="none"
            stroke="#b3a9d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0.5 9"
          />

          {tickAngles.map((angle, index) => {
            const isMajor = index % 8 === 0;
            const outer = polarToCartesian(centerX, centerY, radius + 3, angle);
            const inner = polarToCartesian(
              centerX,
              centerY,
              radius - (isMajor ? majorTickDepth : minorTickDepth * 0.7),
              angle
            );

            return (
              <g key={index}>
                <line
                  x1={outer.x}
                  y1={outer.y}
                  x2={inner.x}
                  y2={inner.y}
                  stroke={isMajor ? "#a99fce" : "#dcd6ec"}
                  strokeWidth={isMajor ? "1.5" : "0.75"}
                  strokeLinecap="round"
                />
                {isMajor && <circle cx={outer.x} cy={outer.y} r="2" fill="#a99fce" />}
              </g>
            );
          })}

          {decorStars.map((star, index) => {
            const angle = tickAngles[star.tick];
            const pos = polarToCartesian(centerX, centerY, radius - star.radiusOffset, angle);
            return (
              <text
                key={`star-${index}`}
                x={pos.x}
                y={pos.y + star.size * 0.35}
                textAnchor="middle"
                fontSize={star.size}
                fill="#9b8fc4"
                opacity={star.opacity}
              >
                ✦
              </text>
            );
          })}

          {points.map((item, index) => {
            const isActive = index === activeIndex;
            const burst = activeCircle + 13;
            const Icon = item.icon;
            return (
              <g key={item.time}>
                <line
                  x1={item.point.x}
                  y1={item.point.y}
                  x2={item.timePoint.x}
                  y2={item.timePoint.y}
                  stroke={isActive ? "#3a1d6e" : "#cbc4de"}
                  strokeWidth={isActive ? "3" : "1.5"}
                  strokeLinecap="round"
                  strokeDasharray={isActive ? "none" : "2 4"}
                />

                <text
                  x={item.timePoint.x}
                  y={item.timePoint.y + timeOffsetY}
                  textAnchor="middle"
                  fill={isActive ? "#3a1d6e" : "#9a93ab"}
                  fontSize={isActive ? activeTimeSize : inactiveTimeSize}
                  fontWeight={isActive ? "600" : "500"}
                  style={{ transition: "all 0.35s ease" }}
                >
                  {item.time}
                </text>

                <g
                  onClick={() =>{
                      setActiveIndex(index);
                      setHasInteracted(true);
                }}
                  style={{ cursor: "pointer", transition: "all 0.35s ease" }}
                >
                  {isActive && (
                    <>
                      <circle cx={item.iconPoint.x} cy={item.iconPoint.y} r={activeCircle + 11} fill="#f6a623" opacity="0.13" />
                      <circle cx={item.iconPoint.x} cy={item.iconPoint.y} r={activeCircle + 5} fill="none" stroke="#f6a623" strokeWidth="1.1" opacity="0.55" />
                      {[
                        [0, -burst],
                        [0, burst],
                        [-burst, 0],
                        [burst, 0],
                      ].map(([dx, dy], starIndex) => (
                        <text
                          key={starIndex}
                          x={item.iconPoint.x + dx}
                          y={item.iconPoint.y + dy + 3.5}
                          textAnchor="middle"
                          fontSize="10"
                          fill="#e0901f"
                          opacity="0.9"
                        >
                          ✦
                        </text>
                      ))}
                    </>
                  )}
                  {!isActive && (
                    <circle
                      cx={item.iconPoint.x}
                      cy={item.iconPoint.y}
                      r={inactiveCircle + 4}
                      fill="none"
                      stroke="#e3def0"
                      strokeWidth="1"
                    />
                  )}
                  <circle
                    cx={item.iconPoint.x}
                    cy={item.iconPoint.y}
                    r={isActive ? activeCircle : inactiveCircle}
                    fill={isActive ? "#3a1d6e" : "#faf8f3"}
                    stroke={isActive ? "#f6a623" : "#c9c2dd"}
                    strokeWidth={isActive ? "2.5" : "1.5"}
                    style={{ transition: "all 0.25s ease" }}
                  />
                  <g
                      transform={`translate(
                      ${item.iconPoint.x - (isActive ? activeIcon : inactiveIcon) / 2},
                      ${item.iconPoint.y - (isActive ? activeIcon : inactiveIcon) / 2}
                    )`}
                      style={{
                        pointerEvents: "none",
                        transition: "all 0.35s ease",
                      }}
                  >
                    <Icon
                        width={isActive ? activeIcon : inactiveIcon}
                        height={isActive ? activeIcon : inactiveIcon}
                        strokeWidth={1.8}
                        color={isActive ? "#ffffff" : "#A8A8B5"}
                    />
                  </g>
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
