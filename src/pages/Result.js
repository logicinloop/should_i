import React from "react";
import { decide } from "../utils/logic";



function Result({ info, setPg }) {
  const out = decide(info.fd, info.hg, info.gl);

  return (
    <div className="card">
      <h2>{out.res}</h2>
      <p>{out.msg}</p>
      

      {/* AI-like suggestion */}
      <div style={{ marginTop: "10px", fontStyle: "italic", color: "#555" }}>
        💡 {out.tip}
      </div>

      <button onClick={() => setPg("home")}>
        Check Another Food
      </button>
    </div>
  );
}

export default Result;
