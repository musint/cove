const STARS = [
  { x: '8%', y: '5%', size: 8, opacity: 0.6 },
  { x: '25%', y: '12%', size: 6, opacity: 0.4 },
  { x: '65%', y: '4%', size: 10, opacity: 0.5 },
  { x: '42%', y: '15%', size: 7, opacity: 0.3 },
  { x: '80%', y: '8%', size: 5, opacity: 0.4 },
  { x: '55%', y: '18%', size: 9, opacity: 0.6 },
  { x: '15%', y: '20%', size: 6, opacity: 0.3 },
  { x: '90%', y: '12%', size: 8, opacity: 0.5 },
  { x: '35%', y: '7%', size: 5, opacity: 0.7 },
  { x: '72%', y: '16%', size: 7, opacity: 0.4 },
];

export default function StarField() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {STARS.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: star.x,
            top: star.y,
            fontSize: `${star.size}px`,
            opacity: star.opacity,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}
