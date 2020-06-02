import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setDifficulty, setFeedback } from "../redux/actions/infoActions";
import "../styles/App.css";
import "../styles/InfoBox.css";

// difficulty, setDifficulty, feedback, changeFeedbackToggle
const InfoBox = (props) => {
  const { difficulty, feedback, dispatch } = props;
  const difficultyLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="info-box">
      <div className="app-container">
        <div>
          <div className="info-item">
            <label className="label">Select your difficulty level:</label>
            <div className="drop-down">
              <button className="drop-down-selection">{difficulty}</button>
              <div className="drop-down-content">
                {difficultyLevels.map((level) => {
                  return (
                    <button
                      className="option"
                      key={level}
                      value={level}
                      onClick={(e) => {
                        dispatch(setDifficulty(level));
                      }}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="info-item">
            <label className="label">
              Would you like real-time feedback as you play?
            </label>
            <div className="toggle">Yes
              <input
                className='radio-button'
                type="radio"
                name="feedback"
                id="yes"
                checked={feedback}
                onChange={(e) => {
                  if (e.target.value === "yes") dispatch(setFeedback(true));
                }}
                value="yes"
              />
            </div>
            <div className="toggle">
              No
              <input
                className='radio-button'
                type="radio"
                name="feedback"
                value="no"
                id="no"
                checked={!feedback}
                onChange={(e) => {
                  if (e.target.value === "no") dispatch(setFeedback(false));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  difficulty: PropTypes.number.isRequired,
  feedback: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  return {
    difficulty: state.infoState.difficulty,
    feedback: state.infoState.feedback,
  };
};

export default connect(mapStateToProps)(InfoBox);

// onChange={e => {
//   dispatch(setDifficulty(e.value))
