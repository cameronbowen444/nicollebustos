import React from "react";

const LineGradient = ({ width = "w-full", className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`h-0.5 ${width} rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 ${className}`}
    />
  );
};

export default LineGradient;