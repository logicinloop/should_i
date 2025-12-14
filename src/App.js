import React, { useState } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";

function App() {
  const [pg, setPg] = useState("home");
  const [info, setInfo] = useState({});

  return (
    <div className="app">
      {pg === "home" && <Home setPg={setPg} />}
      {pg === "form" && <Form setPg={setPg} setInfo={setInfo} />}
      {pg === "res" && <Result info={info} setPg={setPg} />}
    </div>
  );
}

export default App;
