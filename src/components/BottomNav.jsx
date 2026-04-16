import { useNavigate, useLocation } from 'react-router-dom';

const TABS = [
  { path: '/', label: 'Island', emoji: '🏝️' },
  { path: '/rewards', label: 'Rewards', emoji: '🎁' },
  { path: '/stats', label: 'Stats', emoji: '📊' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 0',
        background: 'rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: '12px',
      }}
    >
      {TABS.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              opacity: isActive ? 1 : 0.5,
              cursor: 'pointer',
              textAlign: 'center',
              padding: '4px 16px',
            }}
          >
            <div style={{ fontSize: '18px' }}>{tab.emoji}</div>
            <div>{tab.label}</div>
          </button>
        );
      })}
    </nav>
  );
}
