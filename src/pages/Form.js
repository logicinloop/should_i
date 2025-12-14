import React, { useState } from "react";

function Form({ setPg, setInfo }) {
  const [fd, setFd] = useState("junk");
  const [hg, setHg] = useState(5);
  const [gl, setGl] = useState("loss");

  const submit = () => {
    setInfo({ fd, hg, gl });
    setPg("res");
  };

  return (
    <div className="card">
      <h2>Tell us a bit more</h2>

      <label>Food Type</label>
      <select onChange={(e) => setFd(e.target.value)}>
        <option value="junk">Junk Food</option>
        <option value="sweet">Sweet</option>
        <option value="healthy">Healthy</option>
      </select>

      <label>Hunger Level: {hg}</label>
      <input
        type="range"
        min="1"
        max="10"
        value={hg}
        onChange={(e) => setHg(e.target.value)}
      />

      <label>Fitness Goal</label>
      <select onChange={(e) => setGl(e.target.value)}>
        <option value="loss">Weight Loss</option>
        <option value="maintain">Maintain</option>
        <option value="gain">Weight Gain</option>
      </select>

      <button onClick={submit}>Decide</button>
    </div>
  );
}

export default Form;
