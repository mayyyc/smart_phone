import React from "react";

interface ICallingProps {
  onHangUp: Function;
}

const Calling = ({ onHangUp }: ICallingProps) => {
  return (
    <div>
      calling
      <button onClick={() => onHangUp()}>Hang up</button>
    </div>
  );
};

export default Calling;
