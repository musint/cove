import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarField from '../components/StarField';

export default function DurationPicker() {
  const [duration, setDuration] = useState(30);
  const navigate = useNavigate();

  return (
    <div className="bg-home" style={{ position: 'relative', minHeight: '100vh' }}>
      <StarField />

      {/* Back button */}
      <div style={{ padding: '20px 24px 0', position: 'relative', zIndex: 1 }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            opacity: 0.7,
          }}
        >
          ←
        </button>
      </div>

      {/* Duration display and slider */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: '14px', opacity: 0.6, marginBottom: '16px' }}>
          How long will you focus?
        </div>

        <div style={{ fontSize: '80px', fontWeight: 200, letterSpacing: '2px' }}>
          {duration}
        </div>
        <div style={{ fontSize: '16px', opacity: 0.6, marginBottom: '40px' }}>
          minutes
        </div>

        <input
          type="range"
          min={10}
          max={120}
          step={5}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          style={{
            width: '80%',
            maxWidth: '300px',
            accentColor: '#a855f7',
          }}
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

        {/* Begin button */}
        <button
          className="btn-primary btn-primary-pill"
          onClick={() => navigate('/focus', { state: { duration } })}
          style={{ marginTop: '48px' }}
        >
          Begin Focus
        </button>
      </div>
    </div>
  );
}
