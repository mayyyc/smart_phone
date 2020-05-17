import React from "react";

interface ICallingProps {
  onHangUp: Function;
  number: string;
}

const Calling = ({ onHangUp, number }: ICallingProps) => {
  const displayName =
    (number[0] === "0" && number[1] === "4" && number.length === 10) ||
    number.length === 11
      ? "Significant Someone"
      : number;
  return (
    <div>
      <div>{displayName}</div>
      calling
      <button onClick={() => onHangUp()}>Hang up</button>
    </div>
  );
};

export default Calling;
