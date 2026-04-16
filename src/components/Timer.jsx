export default function Timer({ display, totalMinutes }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: '72px',
          fontWeight: 200,
          letterSpacing: '4px',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
        }}
      >
        {display}
      </div>
      <div style={{ fontSize: '13px', opacity: 0.5, marginTop: '4px' }}>
        of {String(totalMinutes).padStart(2, '0')}:00
      </div>
    </div>
  );
}
