'use client';

import React, { useEffect, useState } from 'react';

export function TelNo() {
  const number = '0987654321 94+';
  const [numberState, setAdress] = useState(null as null | string);
  useEffect(() => {
    setTimeout(() => {
      setAdress(number.split('').reverse().join(''));
    }, 1000);
  }, []);

  return numberState ? (
    <a className="underline" href={`call:${numberState}`}>
      {numberState}
    </a>
  ) : (
    <span>xxxxxxxxxxxxxxx (Loading...)</span>
  );
}
