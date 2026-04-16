import { useState, useCallback } from 'react';
import { getNextElement, getIslandLevel } from '../data/islandElements';

const STORAGE_KEY = 'cove-data';

const DEFAULT_DATA = {
  currency: {
    balance: 0,
    lifetimeEarned: 0,
  },
  island: {
    elements: [],
    hasNeglect: false,
  },
  sessions: [],
  redemptions: [],
};

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DATA;
    return JSON.parse(raw);
  } catch {
    return DEFAULT_DATA;
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function useCoveData() {
  const [data, setData] = useState(loadData);

  const update = useCallback((updater) => {
    setData((prev) => {
      const next = updater(prev);
      saveData(next);
      return next;
    });
  }, []);

  const completeSession = useCallback((duration) => {
    update((prev) => {
      const currencyEarned = Math.round(duration * 10) / 10;
      const unlockedIds = prev.island.elements.map((e) => e.id);
      const nextElement = getNextElement(unlockedIds);

      const newElements = nextElement
        ? [...prev.island.elements, { ...nextElement, unlockedAt: new Date().toISOString() }]
        : prev.island.elements;

      return {
        ...prev,
        currency: {
          balance: prev.currency.balance + currencyEarned,
          lifetimeEarned: prev.currency.lifetimeEarned + currencyEarned,
        },
        island: {
          elements: newElements,
          hasNeglect: false,
        },
        sessions: [
          ...prev.sessions,
          {
            startedAt: new Date(Date.now() - duration * 60000).toISOString(),
            duration,
            completed: true,
            currencyEarned,
          },
        ],
      };
    });
  }, [update]);

  const abandonSession = useCallback((duration) => {
    update((prev) => ({
      ...prev,
      island: {
        ...prev.island,
        hasNeglect: true,
      },
      sessions: [
        ...prev.sessions,
        {
          startedAt: new Date().toISOString(),
          duration,
          completed: false,
          currencyEarned: 0,
        },
      ],
    }));
  }, [update]);

  const claimReward = useCallback((prizeId, cost) => {
    update((prev) => ({
      ...prev,
      currency: {
        ...prev.currency,
        balance: prev.currency.balance - cost,
      },
      redemptions: [
        ...prev.redemptions,
        { prizeId, claimedAt: new Date().toISOString() },
      ],
    }));
  }, [update]);

  const completedSessions = data.sessions.filter((s) => s.completed).length;
  const islandLevel = getIslandLevel(completedSessions);
  const unlockedIds = data.island.elements.map((e) => e.id);
  const nextElement = getNextElement(unlockedIds);

  return {
    data,
    completedSessions,
    islandLevel,
    nextElement,
    completeSession,
    abandonSession,
    claimReward,
  };
}
