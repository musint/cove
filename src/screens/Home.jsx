import { useNavigate } from 'react-router-dom';
import StarField from '../components/StarField';
import Island from '../components/Island';
import BottomNav from '../components/BottomNav';
import useCoveData from '../hooks/useCoveData';

export default function Home() {
  const navigate = useNavigate();
  const { data, islandLevel, completedSessions } = useCoveData();

  return (
    <div className="bg-home" style={{ position: 'relative', minHeight: '100vh' }}>
      <StarField />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="logo">cove</div>
        <div className="currency-badge">🪙 {(Math.round(data.currency.balance * 10) / 10).toLocaleString()}</div>
      </div>

      {/* Island */}
      <div style={{ paddingTop: '60px', position: 'relative', zIndex: 1 }}>
        <Island
          elements={data.island.elements}
          hasNeglect={data.island.hasNeglect}
        />
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', opacity: 0.7 }}>
          Level {islandLevel} Island · {completedSessions} session{completedSessions !== 1 ? 's' : ''} completed
        </div>
      </div>

      {/* START button */}
      <div style={{ textAlign: 'center', marginTop: '48px', position: 'relative', zIndex: 1 }}>
        <button
          className="btn-primary btn-primary-circle"
          onClick={() => navigate('/duration')}
        >
          START
        </button>
        <div style={{ marginTop: '10px', fontSize: '13px', opacity: 0.6 }}>
          tap to begin a focus session
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
