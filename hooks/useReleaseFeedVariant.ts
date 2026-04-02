'use client';

import { useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  parseStoredReleaseFeedVariant,
  RELEASE_FEED_VARIANT_STORAGE_KEY,
  type ReleaseFeedVariant,
} from '@/lib/release-feed-design';

const VARIANT_CHANGE_EVENT = 'portfolio-release-feed-variant-change';

function getSnapshot(): ReleaseFeedVariant {
  if (typeof window === 'undefined') return 'timeline';
  return parseStoredReleaseFeedVariant(localStorage.getItem(RELEASE_FEED_VARIANT_STORAGE_KEY));
}

function subscribe(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener('storage', handler);
  window.addEventListener(VARIANT_CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(VARIANT_CHANGE_EVENT, handler);
  };
}

export function setReleaseFeedVariant(v: ReleaseFeedVariant) {
  try {
    localStorage.setItem(RELEASE_FEED_VARIANT_STORAGE_KEY, v);
    window.dispatchEvent(new Event(VARIANT_CHANGE_EVENT));
  } catch {
    /* ignore */
  }
}

export function useReleaseFeedVariant() {
  const variant = useSyncExternalStore(subscribe, getSnapshot, () => 'timeline');

  const setVariant = useCallback((v: ReleaseFeedVariant) => {
    setReleaseFeedVariant(v);
  }, []);

  return useMemo(() => ({ variant, setVariant }), [variant, setVariant]);
}
