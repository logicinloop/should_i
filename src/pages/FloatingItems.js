import React from "react";

const items = ["🍎", "🍌", "🍇", "🍓", "⭐", "🌟", "🥝", "🍊"];

export default function FloatingItems() {
  return (
    <div className="floating-items">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="float-item"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 24}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 7}s`,
          }}
        >
          {items[Math.floor(Math.random() * items.length)]}
        </span>
      ))}
    </div>
  );
}
