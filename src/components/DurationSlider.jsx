export default function DurationSlider({ value, onChange }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '64px', fontWeight: 200, letterSpacing: '2px' }}>
        {value}
      </div>
      <div style={{ fontSize: '14px', opacity: 0.6, marginBottom: '24px' }}>
        minutes
      </div>
      <input
        type="range"
        min={10}
        max={120}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '80%', maxWidth: '300px', accentColor: '#a855f7' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          maxWidth: '300px',
          margin: '8px auto 0',
          fontSize: '12px',
          opacity: 0.4,
        }}
      >
        <span>10 min</span>
        <span>120 min</span>
      </div>
    </div>
  );
}
