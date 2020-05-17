import React, { useState, useEffect } from "react";
import { sortNumberByPossibility } from "./algorithm";
import "./Keypad.css";
import phone from "./phone.svg";
import down from "./down.svg";

interface IKeypadProps {
  onCall: Function;
}

const Keypad = ({ onCall }: IKeypadProps) => {
  const [input, setInput] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>(new Array(10));
  const [expanded, setExpanded] = useState(true);
  const handleTypeNumber = (number: number) => {
    setInput(input + number.toString());
  };
  const handleDelete = () => {
    input.length > 0 && setInput(input.slice(0, input.length - 1));
  };
  useEffect(() => {
    setSortedNumbers(sortNumberByPossibility(input));
    input && setExpanded(false);
  }, [input]);
  return (
    <div className="keypad">
      <h1 className="input">
        {input}
        {input && (
          <button className="delete" onClick={() => handleDelete()}>
            x
          </button>
        )}
      </h1>
      <div className="pad">
        <div className="suggestion">Suggestion</div>
        {sortedNumbers.map((number, i) =>
          !expanded && i > 5 ? null : (
            <div
              className="key"
              key={i}
              onClick={() => handleTypeNumber(number)}
            >
              {number}
            </div>
          )
        )}
        {!expanded && (
          <button className="more" onClick={() => setExpanded(true)}>
            View More <img className="down" src={down} alt="" />
          </button>
        )}
      </div>
      <div
        className="call"
        aria-label="call"
        onClick={() => input && onCall(input)}
      >
        <img className="phone" src={phone} alt="call" />
      </div>
    </div>
  );
};

export default Keypad;
