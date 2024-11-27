import "./AnimalShow.css";
import { useState } from "react";

import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";

function AnimalShow({ type, key }) {
  const [clicks, setClicks] = useState(0);

  const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleBtnClick = (event) => {
    event.stopPropagation();
    setClicks(clicks - 1);
  };

  return (
    <div className="animal-show">
      <img
        src={svgMap[type]}
        alt="animals Logo"
        className="animal"
        onClick={handleClick}
      />
      <img
        src={heart}
        className="heart"
        alt="hearts Logo"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
      <button onClick={handleBtnClick}>Minimize</button>
      <div className="container">
        <div className="parent-container">
          <div className="header">
            <div className="navbar"></div>
            <div className="optionsList">
              <div className="options">Home</div>
              <div className="options">About</div>
              <div className="options">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalShow;
