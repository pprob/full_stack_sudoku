import React from "react";
import axios from "axios";
import Loader from "./Loader";
import image1 from "../assets/profile-cover/sudoku-1.jpg";
import image2 from "../assets/profile-cover/sudoku-2.jpg";
import image3 from "../assets/profile-cover/sudoku-3.jpg";
import image4 from "../assets/profile-cover/sudoku-4.jpg";
import placeHolderProfileImage from "../assets/placeHolders/placeholder-profile.jpg";
import "../styles/ProfileCard.css";

const images = [image1, image2, image3, image4];

class ProfileCard extends React.Component {
  state = {
    loaded: true,
    error: undefined,
    email: undefined,
    username: undefined,
    description: undefined,
    avatarFile: undefined,
    avatarURL: undefined,
    scoreCard: undefined,
  };
  selectRandomImage = () => {
    const randomImageIndex = Math.floor(Math.random() * 4);
    return images[randomImageIndex];
  };
  setAvatarState = (e) => {
    if (e.target.files[0]) {
      this.setState({
        avatarFile: e.target.files[0],
      });
    } else {
      return false;
    }
  };
  handleAvatarUpload = async () => {
    const formData = new FormData();
    formData.append("avatar", this.state.avatarFile);
    try {
      const response = await axios.post("/api/users/me/avatar", formData);
      if (response.data.success) {
        this.setState({
          avatarFile: undefined,
          error: undefined,
        });
        return window.location.reload();
      }
    } catch (e) {
      this.setState({
        avatarFile: undefined,
        error: e.response.data.error,
      });
    }
  };
  componentDidMount = () => {
    this.fetchProfile();
  };
  componentDidUpdate = () => {
    if (this.state.avatarFile) {
      this.handleAvatarUpload();
      this.fetchProfile();
    }
  };
  renderPlayerScores = () => {};

  fetchProfile = async () => {
    try {
      // dont need to call /me, can call score end point and populate it with user data
      const response = await axios.get("api/scores/my-score");
      const avatarUrl = `/api/users/me/avatar`;
      if (response.data.success) {
        this.setState((state) => {
          return {
            loaded: true,
            error: undefined,
            email: response.data.email,
            username: response.data.username,
            avatarFile: undefined,
            avatarURL: avatarUrl,
            scoreCard: response.data.scoreCard,
          };
        });
      }
    } catch (e) {
      this.setState((state) => ({
        loaded: false,
        avatarFile: undefined,
        email: undefined,
        username: undefined,
        error: e.message,
      }));
    }
  };
  renderLoader = () => {
    return <Loader />;
  };
  renderProfile = () => {
    const image = this.selectRandomImage();
    return (
      <div className="profile-card">
        <div className="profile-top-card">
          <img src={image} alt=""></img>
        </div>
        <div className="image-container">
          <div className="image-upload">
            <label htmlFor="file-input">
              <img
                src={this.state.avatarURL || placeHolderProfileImage}
                alt=""
              />
            </label>
            <input
              type="file"
              id="file-input"
              name="file"
              onChange={this.setAvatarState}
            />
          </div>
        </div>
        <div className="card-content">
          <h1>{this.state.username}</h1>
          <h2>{this.state.email}</h2>
          <h3>Lifetime scores (difficulty - wins)</h3>
          <div className="card-scores">
            {this.state.scoreCard &&
              Object.keys(this.state.scoreCard).map((key) => {
                const value = this.state.scoreCard[key];
                console.log(key, value);
                return (
                  <p>
                    <span className="difficulty-level">{key}</span> : <span className="wins">{value}</span>
                  </p>
                );
              })}
          </div>
        </div>
        {this.state.error && <div>{this.state.error}</div>}
        <div className="contact-details">
          Sudokuact
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.loaded && this.renderLoader()}
        {this.state.loaded && this.renderProfile()}
      </React.Fragment>
    );
  }
}

export default ProfileCard;
