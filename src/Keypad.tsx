import React, { useState, useEffect } from "react";
import { sortNumberByPossibility } from "./algorithm";

interface IKeypadProps {
  onCall: Function;
}

const Keypad = ({ onCall }: IKeypadProps) => {
  const [input, setInput] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>(new Array(10));
  const handleTypeNumber = (number: number) => {
    setInput(input + number.toString());
  };
  const handleDelete = () => {
    input.length > 0 && setInput(input.slice(0, input.length - 1));
  };
  useEffect(() => {
    setSortedNumbers(sortNumberByPossibility(input));
  }, [input]);
  return (
    <div>
      Keypad
      <div>{input}</div>
      <button onClick={() => handleDelete()}>x</button>
      {sortedNumbers.map((number, i) => (
        <button key={i} onClick={() => handleTypeNumber(number)}>
          {number}
        </button>
      ))}
      <button onClick={() => onCall(input)}>call</button>
    </div>
  );
};

export default Keypad;
