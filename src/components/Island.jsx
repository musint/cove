export default function Island({
  elements = [],
  hasNeglect = false,
  highlightId = null,
  growingId = null,
  dimmed = false,
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '300px',
        height: '200px',
        margin: '0 auto',
        opacity: dimmed ? 0.7 : 1,
        transition: 'opacity 0.3s',
      }}
    >
      {/* Water reflection */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '-10%',
          right: '-10%',
          height: '40px',
          background: 'rgba(30, 144, 200, 0.3)',
          borderRadius: '50% 50% 0 0',
        }}
      />

      {/* Island base */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '10%',
          width: '80%',
          height: '50px',
          background: '#2ecc71',
          borderRadius: '50%',
        }}
      />

      {/* Neglect patch */}
      {hasNeglect && (
        <div
          style={{
            position: 'absolute',
            bottom: '42px',
            right: '25%',
            width: '35px',
            height: '18px',
            background: 'rgba(100, 100, 100, 0.5)',
            borderRadius: '50%',
          }}
        />
      )}

      {/* Unlocked elements */}
      {elements.map((el) => {
        const isHighlighted = el.id === highlightId;
        const isGrowing = el.id === growingId;
        return (
          <div
            key={el.id}
            className={isHighlighted ? 'anim-sparkle' : isGrowing ? 'anim-pulse' : ''}
            style={{
              position: 'absolute',
              left: `${el.x}%`,
              bottom: `${100 - el.y}%`,
              fontSize: el.tier >= 4 ? '24px' : el.tier >= 2 ? '20px' : '16px',
              transform: 'translate(-50%, 50%)',
              transition: 'all 0.3s',
            }}
            title={el.label}
          >
            {el.emoji}
          </div>
        );
      })}
    </div>
  );
}
