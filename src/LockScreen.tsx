import React from "react";
import Clock from "react-live-clock";
import "./LockScreen.css";

interface ILockScreenProps {
  onUnlock: Function;
}

const LockScreen = ({ onUnlock }: ILockScreenProps) => {
  return (
    <>
      <div className="Clock">
        <Clock />
      </div>
      <div className="Date">
        <Clock format="dddd, MMMM D" />
      </div>
      <button onClick={() => onUnlock()}>Unlock your very smart phone</button>
    </>
  );
};

export default LockScreen;
