import { cn } from "../../lib/utils";
import React, { useMemo } from "react";

export const Meteors = ({ number = 5, className }) => {
  const meteors = useMemo(() => Array.from({ length: number }, (_, idx) => ({
    id: `meteor${idx}`,
    top: 0,
    left: `${Math.floor(Math.random() * (400 - -300) + -400)}px`,
    animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
    animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
  })), [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-[#a0d9f7] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </>
  );
};