import React from "react";

interface IKeypadProps {
  onCall: Function;
}

const Keypad = ({ onCall }: IKeypadProps) => {
  return (
    <div>
      Keypad
      <button onClick={() => onCall()}>call</button>
    </div>
  );
};

export default Keypad;
