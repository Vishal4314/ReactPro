import React from "react";
import Button from "../components/Button";

export const ButtonPage = () => {
  const handleClick = () => {
    console.log("button clicked!!!!!!");
  };

  const handleClickEnter = () => {
    console.log("mouse entered!!!");
  };
  const handleClickLeave = () => {
    console.log("mouse left!!!");
  };

  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button primary rounded onMouseEnter={handleClickEnter}>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button primary rounded outline onMouseLeave={handleClickLeave}>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger outline onClick={handleClick}>
          Click Me 2!!
        </Button>
      </div>
      <div>
        <Button secondary rounded onClick={handleClick}>
          Click Me 3!!
        </Button>
      </div>
      <div>
        <Button danger onClick={handleClick}>
          Click Me 4!!
        </Button>
      </div>
      <div>
        <Button warning rounded onClick={handleClick}>
          Click Me 4!!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
