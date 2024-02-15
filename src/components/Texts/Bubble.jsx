import React from "react";



const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Bubbbbbbbble text".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;