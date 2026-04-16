export default function RewardCard({ reward, balance, claimed, onClaim }) {
  const canAfford = balance >= reward.cost;
  const progress = Math.min(balance / reward.cost, 1);

  return (
    <div
      className="glass-card"
      style={{
        opacity: canAfford ? 1 : 0.6,
        transition: 'opacity 0.3s',
      }}
    >
      <div style={{ fontSize: '36px', textAlign: 'center', marginBottom: '8px' }}>
        {reward.emoji}
      </div>
      <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
        {reward.name}
      </h3>
      <p style={{ fontSize: '12px', opacity: 0.7, marginBottom: '12px' }}>
        {reward.description}
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          marginBottom: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: '100%',
            background: canAfford
              ? 'linear-gradient(135deg, #ec4899, #a855f7)'
              : 'rgba(255, 255, 255, 0.3)',
            borderRadius: '3px',
            transition: 'width 0.3s',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px' }}>🪙 {reward.cost}</span>
        {claimed ? (
          <span style={{ fontSize: '12px', opacity: 0.5 }}>Claimed ✓</span>
        ) : canAfford ? (
          <button
            onClick={() => onClaim(reward.id, reward.cost)}
            className="btn-primary btn-primary-pill"
            style={{ padding: '6px 16px', fontSize: '12px' }}
          >
            Claim
          </button>
        ) : (
          <span style={{ fontSize: '12px', opacity: 0.5 }}>
            {reward.cost - balance} more
          </span>
        )}
      </div>
    </div>
  );
}
