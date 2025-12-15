import React, { useEffect, useState } from "react";
import { decide } from "../utils/logic";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
export default function Result({ info, setPg }) {
  const { width, height } = useWindowSize();
  const out = decide(info.food, info.hunger, info.goal);
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (info.food === "healthy") {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 8000);
    }
  }, [info.food]);
  return (
    <div className="result-page">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          gravity={0.25}
          recycle={false}
        />
      )}
      <div className="card result-card">
        <h2>{out.result}</h2>
        <p>{out.reason}</p>
        <div className="tip">{out.tip}</div>
        <div className="bar">
          <div
            className="bar-fill"
            style={{ width: `${out.score}%` }}
          />
        </div>
        <button onClick={() => setPg("home")}>
          Check Another Food
        </button>
      </div>
    </div>
  );
}
