import React from "react";
import { decide } from "../utils/logic";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Result({ info, setPg }) {
  const { width, height } = useWindowSize();
  const out = decide(info.food, info.hunger, info.goal);

  return (
    <div className="card">
      <h2>{out.result}</h2>
      <p>{out.reason}</p>
      <div className="tip">{out.tip}</div>

      <div
        style={{
          marginTop: "15px",
          width: "100%",
          height: "20px",
          background: "#ccc",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${out.score}%`,
            height: "100%",
            background: "#4caf50",
            transition: "width 0.5s",
          }}
        />
      </div>

      {info.food === "healthy" && <Confetti width={width} height={height} />}

      <button
        style={{ marginTop: "15px", background: "#2196f3" }}
        onClick={() => setPg("home")}
      >
        Check Another Food
      </button>
    </div>
  );
}
