import React from "react";
import Clock from "react-live-clock";
import "./LockScreen.css";
import What from "./What";
import phone from "./phone.svg";

interface ILockScreenProps {
  onUnlock: Function;
}

const LockScreen = ({ onUnlock }: ILockScreenProps) => {
  return (
    <div className="lock">
      <div className="datetime">
        <time className="time">
          <Clock />
        </time>
        <div className="date">
          <Clock format="dddd, MMMM D" />
        </div>
      </div>
      <button className="unlock" onClick={() => onUnlock()}>
        <img className="app" src={phone} alt="app" />
      </button>
      <What />
    </div>
  );
};

export default LockScreen;
