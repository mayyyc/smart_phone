import React from "react";
import "./LockScreen.css";
import What from "./What";
import phone from "./phone.svg";
import Time from "./Time";

interface ILockScreenProps {
  onUnlock: Function;
}

const LockScreen = ({ onUnlock }: ILockScreenProps) => {
  return (
    <div className="lock">
      <div className="datetime">
        <time className="time">
          <Time />
        </time>
        <div className="date">{new Date().toLocaleDateString()}</div>
      </div>
      <button className="unlock" onClick={() => onUnlock()}>
        <img className="app" src={phone} alt="app" />
      </button>
      <What />
    </div>
  );
};

export default LockScreen;
