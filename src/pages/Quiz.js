import React, { useState } from "react";
const questions = [
  { q: "Which is healthier?", options: ["🍕 Pizza", "🍎 Apple"], ans: 1 },
  { q: "Best snack?", options: ["Chips", "Nuts"], ans: 1 },
  { q: "Good breakfast?", options: ["Eggs & oats", "Donuts"], ans: 0 },
];
export default function Quiz({ setPg }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const handleAnswer = (i) => {
    if (i === questions[idx].ans) setScore(score + 1);
    if (idx + 1 < questions.length) setIdx(idx + 1);
    else alert(`Quiz finished! Score: ${score + 1}/${questions.length}`);
  };
  return (
    <div className="card">
      <h2>Mini Nutrition Quiz</h2>
      <p>{questions[idx].q}</p>
      {questions[idx].options.map((o, i) => (
        <button key={i} onClick={() => handleAnswer(i)}>
          {o}
        </button>
      ))}
      <button
        style={{ marginTop: "15px", background: "#ff9800" }}
        onClick={() => setPg("home")}
      >
        Back to Home
      </button>
    </div>
  );
}
