import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

const Gradient = ({
  gradientBackgroundStart = 'rgb(108, 0, 162)',
  gradientBackgroundEnd = 'rgb(0, 17, 80)',
  firstColor = '18, 113, 255',
  secondColor = '221, 74, 255',
  thirdColor = '100, 220, 255',
  fourthColor = '200, 50, 50',
  fifthColor = '180, 180, 50',
  pointerColor = '140, 100, 255',
  size = '50%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
  containerHeight = 'screen',
}) => {
  const interactiveRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const props = {
      '--gradient-background-start': gradientBackgroundStart,
      '--gradient-background-end': gradientBackgroundEnd,
      '--first-color': firstColor,
      '--second-color': secondColor,
      '--third-color': thirdColor,
      '--fourth-color': fourthColor,
      '--fifth-color': fifthColor,
      '--pointer-color': pointerColor,
      '--size': size,
      '--blending-value': blendingValue,
    };

    Object.entries(props).forEach(([prop, value]) => {
      document.body.style.setProperty(prop, value);
    });

    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  useEffect(() => {
    const move = () => {
      if (!interactiveRef.current) return;
      setCurX((prevX) => prevX + (tgX - prevX) / 20);
      setCurY((prevY) => prevY + (tgY - prevY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    };

    const animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div
      className={cn(
        `relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]`,
        containerClassName,
        containerHeight === 'screen' ? 'h-screen w-screen' : 'h-full w-full rounded-2xl'
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn('relative z-10', className)}>{children}</div>
      <div
        className={cn(
          'absolute inset-0 h-full w-full blur-lg',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(20px)]'
        )}
      >
        {['first', 'second', 'third', 'fourth', 'fifth'].map((item) => (
          <div
            key={item}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--${item}-color),_0.8)_0,_rgba(var(--${item}-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[transform-origin:${item === 'second' ? 'calc(50%-400px)' : item === 'third' ? 'calc(50%+400px)' : item === 'fourth' ? 'calc(50%-200px)' : item === 'fifth' ? 'calc(50%-800px)_calc(50%+800px)' : 'center_center'}]`,
              `animate-${item}`,
              item === 'fourth' || item === 'fifth' ? 'opacity-70' : 'opacity-100'
            )}
          ></div>
        ))}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Gradient;