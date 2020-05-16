import React, { useState } from "react";
import "./App.css";
import LockScreen from "./LockScreen";
import Keypad from "./Keypad";
import Calling from "./Calling";

function App() {
  const [screen, setScreen] = useState<0 | 1 | 2>(0);
  const renderScreen = () => {
    switch (screen) {
      case 0:
        return <LockScreen onUnlock={() => setScreen(1)} />;
      case 1:
        return <Keypad onCall={() => setScreen(2)} />;
      case 2:
        return <Calling onHangUp={() => setScreen(0)} />;
    }
  };
  return <div className="App">{renderScreen()}</div>;
}

export default App;
