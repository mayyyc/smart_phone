import React, { useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    const now = new Date().toLocaleTimeString().slice(0, 5);
    setTime(now);
  };
  setInterval(UpdateTime);
  return <div>{ctime}</div>;
};

export default Time;
