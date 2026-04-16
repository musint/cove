import { useNavigate, useLocation } from 'react-router-dom';
import StarField from '../components/StarField';
import Island from '../components/Island';
import useCoveData from '../hooks/useCoveData';

export default function SessionComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const { duration = 0, currencyEarned = 0, newElement = null } = location.state || {};
  const { data } = useCoveData();

  return (
    <div className="bg-sunrise" style={{ position: 'relative', minHeight: '100vh' }}>
      <StarField />

      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '60px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>
          Nice work!
        </h1>
        <p style={{ fontSize: '14px', opacity: 0.8 }}>
          You stayed focused for {duration} minutes
        </p>
      </div>

      {/* Summary card */}
      <div
        className="glass-card"
        style={{
          margin: '32px auto',
          maxWidth: '280px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>+{Math.round(currencyEarned * 10) / 10} 🪙</div>
        <div style={{ fontSize: '13px', opacity: 0.7 }}>
          Total: {(Math.round(data.currency.balance * 10) / 10).toLocaleString()} coins
        </div>
        {newElement && (
          <div style={{ marginTop: '12px', fontSize: '14px' }}>
            New: {newElement.emoji} {newElement.label}
          </div>
        )}
      </div>

      {/* Island with highlighted new element */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Island
          elements={data.island.elements}
          hasNeglect={false}
          highlightId={newElement?.id}
        />
      </div>

      {/* Back button */}
      <div style={{ textAlign: 'center', marginTop: '40px', position: 'relative', zIndex: 1 }}>
        <button
          className="btn-primary btn-primary-pill"
          onClick={() => navigate('/', { replace: true })}
        >
          Back to Island
        </button>
      </div>
    </div>
  );
}
