'use client';
import { useCallback, useState } from 'react';

/**
 * Returns null on server side execution.
 */
function safeGetItem(key: string) {
  if(typeof window == "undefined") return null;
  return localStorage.getItem(key);
}

/**
 * No-op on server side execution.
 */
function safeSetItem(key: string, value: string) {
  if(typeof window == "undefined") return;
  return localStorage.setItem(key, value);
}

export function useLocalStorage(key: string, defaultValue: string) {
  const [state, setState] = useState(safeGetItem(key) ?? defaultValue);

  const setValue = useCallback(
    (val: string) => {
      safeSetItem(key, val);
      setState(val);
    },
    [key, setState],
  );

  return [state, setValue] as const;
}
