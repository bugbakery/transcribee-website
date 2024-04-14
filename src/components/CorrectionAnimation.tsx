'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useInView } from 'react-intersection-observer';

export function CorrectionAnimation() {
  const typeSpanRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  useEffect(() => {
    if (!typeSpanRef.current || !inView) return;

    setTimeout(() => {
      new Typed(typeSpanRef.current, {
        strings: ['wrongly'],
        typeSpeed: 80,
        backSpeed: 50,
      });
    }, 1000);
  }, [inView, typeSpanRef, ref]);

  return (
    <div
      ref={ref}
      className="text-[calc(min(6vw,_36px))] md:text-[calc(min(7vw_-_33px,_36px))] leading-normal py-6 px-8 rounded-md max-w-[580px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
    >
      Transcript with <span style={{ color: '#aa0000' }}>low </span>
      <span style={{ color: '#550000' }}>confidence</span> is highlighted in red. With this,{' '}
      <span ref={typeSpanRef}>
        <span style={{ color: '#d40000' }}>wrogrly</span>
      </span>
      <br /> transcribed words can be swiftly identified &amp; corrected.
    </div>
  );
}
