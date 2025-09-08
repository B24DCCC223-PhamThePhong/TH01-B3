import React, { useState } from "react";
import "./App.css";

function Box({ color }) {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      <p>Màu hiện tại: {color}</p>
    </div>
  );
}

function App() {
  const [color, setColor] = useState("red");

  const colors = ["red", "green", "blue", "yellow"];

  return (
    <div className="container">
      <h2>Ứng dụng đổi màu nền</h2>
      <div className="button-group">
        {colors.map((c) => (
          <button key={c} onClick={() => setColor(c)}>
            {c}
          </button>
        ))}
      </div>
      <Box color={color} />
    </div>
  );
}

export default App;
