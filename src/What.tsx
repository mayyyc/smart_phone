import React, { useState } from "react";
import "./What.css";
import question from "./question.svg";
const What = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="what" onClick={() => setShowModal(true)}>
        <img className="question" src={question} alt="what" />
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-overlay" />
          <div className="modal-container">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              x
            </button>
            <h2>What is this?</h2>
            <div className="what-content">
              <p>
                This idea is inspired by a dream that I went home visiting my
                parants. I was trying to call them at the airpot. But on my
                phone, the number on the keypad is sorted by the frequency the
                number is used, the top 6 numbers are shown on the screen and
                the rest is hidden behind a dropdown menu.
              </p>
              <p>
                So I designed this number suggestion algorithm. Based on the
                previous number you type and the digit you're at, the algorithm
                will try to "guess" the most possible next number you're about
                to type. All the effort is to make it easier for you to dial.
                (The current dataset is from the total 46 contacts on my phone.)
              </p>
              <p>
                Intuitive interaction, instant feedback, dark mode and more.
                With the industry's best practice in mind, the app is keen to
                deliver an enjoyable and aesthetically engaging user interface.
              </p>
              <p>
                Try call someone with this revolutionary smart phone app, get
                ready for the mind-blowing dialing experience.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default What;
