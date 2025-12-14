import React, { useState } from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import FloatingItems from "./pages/FloatingItems";
import Particles from "react-tsparticles";
import "./styles.css";

export default function App() {
  const [pg, setPg] = useState("home");
  const [info, setInfo] = useState({});
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`app ${theme}`}>
      {/* Particles background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          particles: {
            number: { value: 40 },
            size: { value: 6 },
            move: { enable: true, speed: 1 },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
          },
        }}
      />

      {/* Sparkles */}
      <div className="sparkles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="sparkle"></div>
        ))}
      </div>

      {/* Floating fruits/stars */}
      <FloatingItems />

      {/* Theme toggle */}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <div className="container">
        {pg === "home" && <Home setPg={setPg} />}
        {pg === "form" && <Form setPg={setPg} setInfo={setInfo} />}
        {pg === "res" && <Result info={info} setPg={setPg} />}
        {pg === "quiz" && <Quiz setPg={setPg} />}
      </div>
    </div>
  );
}
