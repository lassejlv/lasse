import React from "react";

interface ToastStyle {
  name: string;
  style: React.CSSProperties;
}

const ToastStyles: ToastStyle[] = [
  {
    name: "default",
    style: {
      background: "#1a1b1f",
      color: "white",
      border: "2px solid #2c2d32",
      fontWeight: "bold",
    },
  },
];

export default ToastStyles;
