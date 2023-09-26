import React from "react";

const HoverIcon = ({ href, target, children, variant }) => {
  const hoverClass = variant === "sm-footer" ? "hover:text-cyberpunk" : "hover:text-black"; 

  return (
    <a href={href} target={target} className={`text-4xl ${hoverClass}`}>
      {children}
    </a>
  );
};

export default HoverIcon;
