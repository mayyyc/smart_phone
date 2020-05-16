import React from "react";
import Clock from "react-live-clock";
import moment from "moment";
interface ILockScreenProps {
  onUnlock: Function;
}

const LockScreen = ({ onUnlock }: ILockScreenProps) => {
  return (
    <div>
      <div className="Clock">
        <Clock />
      </div>
      <div className="Date">{moment().format("dddd, MMMM D")}</div>
      <button onClick={() => onUnlock()}>Unlock your smart phone</button>
    </div>
  );
};

export default LockScreen;
