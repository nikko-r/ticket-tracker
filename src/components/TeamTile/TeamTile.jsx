import { useState } from "react";
import "./TeamTile.scss";

const TeamTile = ({ name, role, id }) => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="team-tile">
      {/* <p className="team-key">{id}</p> */}
      <p className="team-name">{name}</p>
      <p className="team-role">{role}</p>
      <div className="team-counter">
        <button onClick={handleDecrement} className="team-counter__button">
          -
        </button>
        <p className="team-counter__counter">{counter}</p>
        <button onClick={handleIncrement} className="team-counter__button">
          +
        </button>
      </div>
    </div>
  );
};

export default TeamTile;
