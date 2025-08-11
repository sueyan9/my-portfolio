import React, { useState, useRef, useEffect } from "react";

export function SimpleTimeline() {
  const [activeIndex, setActiveIndex] = useState(2); // 默认激活实习经历
  const [timelinePosition, setTimelinePosition] = useState(0);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  const timelineData = [
    {
      time: "2008",
      icon: "🌏",
      title: "Moved to NZ",
      description: "Immigrated to New Zealand from China, started adapting to new culture and education system"
    },
    {
      time: "2021",
      icon: "❤️",
      title: "SPCA Volunteer",
      description: "Started volunteering at SPCA, participating in animal care and front desk support work"
    },
    {
      time: "2023",
      icon: "🎓",
      title: "University",
      description: "Started software engineering studies at university, began academic journey in tech"
    },
    {
      time: "2023 Aug",
      icon: "💼",
      title: "First Internship",
      description: "Started first internship at a local company, gained C# and full-stack development experience"
    },
    {
      time: "2025",
      icon: "⭐",
      title: "Graduation",
      description: "Will graduate and ready to start career in software engineering field"
    }
  ];

  // 计算时间轴移动位置
  const calculateTimelinePosition = (index) => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    
    // 计算每个时间点之间的间距
    const itemSpacing = containerWidth / (timelineData.length - 1);
    
    // 中心位置是索引2（实习经历），计算需要移动的距离
    const centerIndex = 2;
    const offset = (index - centerIndex) * itemSpacing;
    
    return -offset; // 负号确保方向正确
  };

  // 点击图标时的动画
  const handleIconClick = (index) => {
    setActiveIndex(index);
    const newPosition = calculateTimelinePosition(index);
    setTimelinePosition(newPosition);
  };

  // 初始化位置
  useEffect(() => {
    const initialPosition = calculateTimelinePosition(activeIndex);
    setTimelinePosition(initialPosition);
  }, []);

  return (
    <div style={{ 
      marginTop: '3rem', 
      marginBottom: '2rem',
      width: '100%'
    }}>
      <h2 style={{ 
        color: '#6b5cd6', 
        marginBottom: '2.5rem', 
        textAlign: 'center', 
        fontSize: '1.8rem', 
        fontWeight: '600' 
      }}>
        My Journey
      </h2>
      
      <div 
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          margin: '0 auto',
          padding: '2rem 0',
          overflow: 'hidden'
        }}
      >
        {/* 时间轴容器 - 添加移动动画 */}
        <div 
          ref={timelineRef}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transform: `translateX(${timelinePosition}px)`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            width: '100%',
            minHeight: '200px'
          }}
        >
          {/* 主时间线 */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            background: '#e5e7eb',
            transform: 'translateY(-50%)'
          }} />
          
          {/* 时间点容器 */}
          {timelineData.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
              flex: '1',
              maxWidth: '200px'
            }}>
              {/* 时间标签 */}
              <div style={{
                position: 'absolute',
                top: '-3rem',
                transform: 'rotate(15deg)',
                color: index === activeIndex ? '#6b5cd6' : '#9ca3af',
                fontSize: '0.9rem',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                transition: 'color 0.3s ease'
              }}>
                {item.time}
              </div>
              
              {/* 垂直连接线 */}
              <div style={{
                width: '2px',
                height: index === activeIndex ? '4rem' : '2rem',
                background: index === activeIndex ? '#6b5cd6' : '#d1d5db',
                marginBottom: '1rem',
                transition: 'all 0.3s ease'
              }} />
              
              {/* 图标 */}
              <div 
                onClick={() => handleIconClick(index)}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: index === activeIndex ? '#6b5cd6' : '#f3f4f6',
                  border: `3px solid ${index === activeIndex ? '#6b5cd6' : '#d1d5db'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: index === activeIndex ? '0 4px 20px rgba(107, 92, 214, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = index === activeIndex ? 'scale(1.1)' : 'scale(1)';
                }}
              >
                {item.icon}
              </div>
              
              {/* 事件描述 */}
              <div style={{
                position: 'absolute',
                bottom: '-4rem',
                width: '200px',
                textAlign: 'center',
                color: '#374151',
                fontSize: '0.9rem',
                lineHeight: '1.4',
                opacity: index === activeIndex ? 1 : 0,
                transform: index === activeIndex ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.3s ease',
                pointerEvents: index === activeIndex ? 'auto' : 'none'
              }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* 小刻度线 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: 0
        }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${(i / 19) * 100}%`,
              width: '1px',
              height: '8px',
              background: '#e5e7eb',
              transform: 'translateX(-50%)'
            }} />
          ))}
        </div>
      </div>
      
      {/* 调试信息 */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        color: '#6b7280',
        fontSize: '0.8rem'
      }}>
        Current: {timelineData[activeIndex]?.title} | Position: {timelinePosition.toFixed(0)}px | Total points: {timelineData.length}
      </div>
      
      {/* 交互提示 */}
      <div style={{
        textAlign: 'center',
        marginTop: '1rem',
        color: '#6b7280',
        fontSize: '0.9rem',
        fontStyle: 'italic'
      }}>
        Click icon to view details
      </div>
    </div>
  );
}
