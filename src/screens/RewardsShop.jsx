import { useState } from 'react';
import StarField from '../components/StarField';
import BottomNav from '../components/BottomNav';
import RewardCard from '../components/RewardCard';
import useCoveData from '../hooks/useCoveData';
import { REWARDS } from '../data/rewards';

export default function RewardsShop() {
  const { data, claimReward } = useCoveData();
  const [confirming, setConfirming] = useState(null);

  const handleClaim = (prizeId, cost) => {
    setConfirming({ prizeId, cost, reward: REWARDS.find((r) => r.id === prizeId) });
  };

  const confirmClaim = () => {
    if (confirming) {
      claimReward(confirming.prizeId, confirming.cost);
      setConfirming(null);
    }
  };

  const claimedIds = data.redemptions.map((r) => r.prizeId);

  return (
    <div className="bg-home" style={{ position: 'relative', minHeight: '100vh', paddingBottom: '80px' }}>
      <StarField />

      {/* Header */}
      <div
        style={{
          padding: '20px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="logo" style={{ marginBottom: '4px' }}>Rewards</div>
        <div className="currency-badge" style={{ display: 'inline-block' }}>
          🪙 {data.currency.balance.toLocaleString()}
        </div>
      </div>

      {/* Prize grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          padding: '0 16px',
          position: 'relative',
          zIndex: 1,
          overflowY: 'auto',
        }}
      >
        {REWARDS.map((reward) => (
          <RewardCard
            key={reward.id}
            reward={reward}
            balance={data.currency.balance}
            claimed={claimedIds.includes(reward.id)}
            onClaim={handleClaim}
          />
        ))}
      </div>

      {/* Confirmation modal */}
      {confirming && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '300px',
              textAlign: 'center',
              background: 'rgba(26, 26, 46, 0.95)',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>
              {confirming.reward.emoji}
            </div>
            <h3 style={{ marginBottom: '8px' }}>{confirming.reward.name}</h3>
            <p style={{ fontSize: '13px', opacity: 0.7, marginBottom: '16px' }}>
              Claim for 🪙 {confirming.cost}?
            </p>
            <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '20px' }}>
              Show this screen to your teacher or contact the HaP team to receive your prize.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => setConfirming(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '20px',
                  padding: '8px 20px',
                  color: 'white',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                className="btn-primary btn-primary-pill"
                onClick={confirmClaim}
                style={{ padding: '8px 20px', fontSize: '13px' }}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
