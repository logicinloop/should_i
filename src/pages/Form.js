import React, { useState } from "react";

export default function Form({ setPg, setInfo }) {
  const [f, setF] = useState("junk");
  const [h, setH] = useState(5);
  const [g, setG] = useState("loss");

  const handleSubmit = () => {
    setInfo({ food: f, hunger: h, goal: g });
    setPg("res");
  };

  return (
    <div className="form-page">
      <div className="card form-card">
        <h2>Tell Us a Bit More</h2>

        <label>🍽 Food Type</label>
        <select value={f} onChange={(e) => setF(e.target.value)}>
          <option value="junk">Junk Food</option>
          <option value="sweet">Sweet</option>
          <option value="healthy">Healthy</option>
        </select>

        <label>🤤 Hunger Level: {h}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={h}
          onChange={(e) => setH(e.target.value)}
          className="slider"
        />

        <label>🏋️ Fitness Goal</label>
        <select value={g} onChange={(e) => setG(e.target.value)}>
          <option value="loss">Weight Loss</option>
          <option value="maintain">Maintain</option>
          <option value="gain">Weight Gain</option>
        </select>

        <button className="decide-btn" onClick={handleSubmit}>
          Decide
        </button>
      </div>
    </div>
  );
}
