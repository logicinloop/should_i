import React from "react";
export default function Home({ setPg }) {
  return (
    <div className="card">
      <h1>🥗 Should I Eat This? 🥗</h1>
      <p>A smart food decision assistant</p>
      <button onClick={() => setPg("form")}>Start</button>
      <button
        style={{ marginTop: "12px", background: "#ff9800" }}
        onClick={() => setPg("quiz")}
      >
        Take Mini Quiz
      </button>
    </div>
  );
}
