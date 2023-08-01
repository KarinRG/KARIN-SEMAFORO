import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleAddPurple = () => {
    setColor("purple");
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div style={{ backgroundColor: "red", opacity: color === "red" ? 1 : 0.2 }} onClick={() => handleColorChange("red")}></div>
        <div style={{ backgroundColor: "yellow", opacity: color === "yellow" ? 1 : 0.2 }} onClick={() => handleColorChange("yellow")}></div>
        <div style={{ backgroundColor: "green", opacity: color === "green" ? 1 : 0.2 }} onClick={() => handleColorChange("green")}></div>
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default Home;

