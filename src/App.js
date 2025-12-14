import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";

function App() {
  const [pg, setPg] = useState("home");
  const [info, setInfo] = useState({});
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {pg === "home" && <Home setPg={setPg} />}
      {pg === "form" && <Form setPg={setPg} setInfo={setInfo} />}
      {pg === "res" && <Result info={info} setPg={setPg} />}
    </div>
  );
}

export default App;
