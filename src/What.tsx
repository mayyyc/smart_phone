import React, { useState } from "react";
import "./What.css";

const What = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        <span role="img" aria-label="Triple Question Mark">
          ❓❓❓
        </span>
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-overlay" />
          <div className="modal-container">
            <button onClick={() => setShowModal(false)}>x</button>
            <h2>
              <span role="img" aria-label="TripleQuestion Mark">
                ❓❓❓
              </span>
            </h2>
            <p>
              This idea is inspired by a dream I had. I went home to visit my
              parants, at the airport, I was trying to call them. Looking at my
              phone, the number on the keypad is sorted by the frequency the
              number is used, the top 6 numbers is shown on the screen and the
              rest is hidden behind a dropdown menu.
            </p>
            <p>
              So I designed this number suggestion algorithm. Based on the
              previous number you type and the digit you're at, the algorithm
              will try to "guess" the most possible next number you're about to
              type. The current dataset is from the total 46 contacts on my
              phone.
            </p>
            <p>
              Smooth transition, intuitive interaction, instant feedback and
              more. With the industry's best practice in mind, the app is keen
              to deliver an enjoyable and aesthetically engaging user interface.
            </p>
            <p>
              Try call someone with this revolutionary smart phone app, get
              ready for the mind-blowing dialing experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default What;
