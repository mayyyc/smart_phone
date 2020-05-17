import React from "react";
import phone from "./phone.svg";
import "./Calling.css";

interface ICallingProps {
  onHangUp: Function;
  number: string;
}

const Calling = ({ onHangUp, number }: ICallingProps) => {
  const displayName =
    (number[0] === "0" && number[1] === "4" && number.length === 10) ||
    (number[0] === "1" && number.length === 11)
      ? "Significant Someone"
      : number;
  return (
    <div className="calling">
      <div className="name">
        <h1>{displayName}</h1>
        <p className="tech">calling...isn't technology great?</p>
      </div>
      <div className="action">
        <button className="hangup" onClick={() => onHangUp()}>
          <img className="hang" src={phone} alt="hangup" />
        </button>
      </div>
    </div>
  );
};

export default Calling;
