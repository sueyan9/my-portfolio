import React from "react";

export function HorizontalTimeline() {
  const timelineData = [
    {
      time: "2022-2023",
      icon: "🌏",
      title: "移民新西兰",
      description: "从中国移民到新西兰，开始适应新的教育体系和文化环境"
    },
    {
      time: "2023",
      icon: "❤️",
      title: "SPCA义工",
      description: "开始SPCA义工工作，参与动物照护与前台支持工作"
    },
    {
      time: "2023-2024",
      icon: "🏔️",
      title: "徒步经历",
      description: "完成多条新西兰步道，培养路线规划和风险评估能力"
    },
    {
      time: "2024",
      icon: "💻",
      title: "实习经历",
      description: "在本地公司实习，获得C#和全栈开发实践经验"
    },
    {
      time: "2024-2025",
      icon: "⭐",
      title: "即将毕业",
      description: "准备在软件工程领域开启职业生涯"
    }
  ];

  return (
    <div style={{ 
      marginTop: '3rem', 
      marginBottom: '2rem',
      padding: '0 1rem'
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
      
      <div style={{
        position: 'relative',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem 0'
      }}>
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
        
        {/* 时间标记和事件 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {timelineData.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}>
              {/* 时间标签 */}
              <div style={{
                position: 'absolute',
                top: '-3rem',
                transform: 'rotate(15deg)',
                color: '#9ca3af',
                fontSize: '0.9rem',
                fontWeight: '500',
                whiteSpace: 'nowrap'
              }}>
                {item.time}
              </div>
              
              {/* 垂直连接线 */}
              <div style={{
                width: '2px',
                height: index === 2 ? '4rem' : '2rem',
                background: index === 2 ? '#6b5cd6' : '#d1d5db',
                marginBottom: '1rem'
              }} />
              
              {/* 图标 */}
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: index === 2 ? '#6b5cd6' : '#f3f4f6',
                border: `3px solid ${index === 2 ? '#6b5cd6' : '#d1d5db'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                transition: 'all 0.3s ease'
              }}>
                {item.icon}
              </div>
              
              {/* 事件描述 */}
              {index === 2 && (
                <div style={{
                  position: 'absolute',
                  bottom: '-4rem',
                  width: '200px',
                  textAlign: 'center',
                  color: '#374151',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {item.description}
                </div>
              )}
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
    </div>
  );
}
