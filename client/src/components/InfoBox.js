import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setDifficulty, setFeedback } from "../redux/actions/infoActions";
import "../styles/App.css";
import "../styles/InfoBox.css";

// difficulty, setDifficulty, feedback, changeFeedbackToggle
const InfoBox = (props) => {
  const { difficulty, feedback, dispatch } = props;
  const difficultyLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleRadioToggle = (value) => {
    if (value) {
      dispatch(setFeedback(true));
    } else if (!value) {
      dispatch(setFeedback(false));
    }
    return true;
  };

  return (
    <div className="info-box">
      <div className="app-container">
        <Fragment>
          <div className="info-item">
            <label className="info-label">Select your difficulty level:</label>
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
            <label className="info-label">
              Would you like real-time feedback as you play?
            </label>
              <div className="radio-toggle__container">
                <input
                  type="radio"
                  value={true}
                />
                <label
                  className={feedback ? "radio-selected" : null}
                  onClick={() => handleRadioToggle(true)}
                >
                  Yes
                </label>
                <input type="radio" value={false} />
                <label
                  className={!feedback ? "radio-selected" : null}
                  onClick={() => handleRadioToggle(false)}
                >
                  No
                </label>
              </div>
            </div>
        </Fragment>
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
