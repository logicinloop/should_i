import React from "react";

function Home({ setPg }) {
  return (
    <div className="card">
      <h1>🥗 Should I Eat This?</h1>
      <p>A smart food decision assistant</p>
      <button onClick={() => setPg("form")}>Start</button>
    </div>
  );
}

export default Home;
