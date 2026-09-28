import { useCallback, useState } from 'react';

export function useLocalStorage(key: string, defaultValue: string) {
  const [state, setState] = useState(localStorage.getItem(key) ?? defaultValue);

  const setValue = useCallback(
    (val: string) => {
      localStorage.setItem(key, val);
      setState(val);
    },
    [key, setState],
  );

  return [state, setValue] as const;
}
