import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StarField from '../components/StarField';
import Island from '../components/Island';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';
import useCoveData from '../hooks/useCoveData';

export default function FocusSession() {
  const navigate = useNavigate();
  const location = useLocation();
  const duration = location.state?.duration || 30;
  const { data, nextElement, completeSession, abandonSession } = useCoveData();

  const timer = useTimer(duration, {
    onComplete: () => {
      completeSession(duration);
      navigate('/complete', {
        state: { duration, currencyEarned: duration, newElement: nextElement },
        replace: true,
      });
    },
  });

  // Auto-start timer on mount
  useEffect(() => {
    timer.start();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLeave = () => {
    timer.stop();
    abandonSession(duration);
    navigate('/', { replace: true });
  };

  // Build the elements list, including the "growing" next element
  const displayElements = nextElement
    ? [...data.island.elements, nextElement]
    : data.island.elements;

  return (
    <div className="bg-focus" style={{ position: 'relative', minHeight: '100vh' }}>
      <StarField />

      {/* Timer */}
      <div style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <Timer display={timer.display} totalMinutes={duration} />
      </div>

      {/* Island (dimmed, with growing element) */}
      <div style={{ marginTop: '60px', position: 'relative', zIndex: 1 }}>
        <Island
          elements={displayElements}
          hasNeglect={false}
          growingId={nextElement?.id}
          dimmed={true}
        />
        {nextElement && (
          <div
            style={{
              textAlign: 'center',
              marginTop: '8px',
              fontSize: '11px',
              opacity: 0.5,
            }}
          >
            {nextElement.emoji} {nextElement.label} growing...
          </div>
        )}
      </div>

      {/* Leave button */}
      <div style={{ textAlign: 'center', marginTop: '60px', position: 'relative', zIndex: 1 }}>
        <button
          onClick={handleLeave}
          style={{
            background: 'none',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '10px 28px',
            fontSize: '13px',
            color: 'white',
            opacity: 0.4,
            cursor: 'pointer',
          }}
        >
          leave session
        </button>
        <div style={{ fontSize: '11px', opacity: 0.3, marginTop: '6px' }}>
          you won't earn rewards
        </div>
      </div>
    </div>
  );
}
