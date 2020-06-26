import React from "react";
import axios from "axios";
import "../styles/ProfileCard.css";

class ProfileCard extends React.Component {
  state = {
    loaded: true,
    error: undefined,
    email: undefined,
    username: undefined,
    description: undefined,
    avatarFile: undefined,
    avatarURL: undefined,
    scoreCard: undefined
  };
  setAvatarState = (e) => {
    this.setState({
      avatarFile: e.target.files[0]
    })
  };
  handleAvatarUpload = async () => {
    const formData = new FormData()
    formData.append('avatar', this.state.avatarFile)
    try {
      const response = await axios.post('/api/users/me/avatar', formData)
      if(response.data.success) {
        this.setState({
          avatarFile: undefined,
          error: undefined
        })
      }
    } catch (e) {
      console.log(e.response.data)
      this.setState({
        avatarFile: undefined,
        error: e.response.data.error
      })
    }
  }
  componentDidMount = () => {
    this.fetchProfile()
  }
  componentDidUpdate = () => {
    if (this.state.avatarFile) {
      this.handleAvatarUpload()
      this.fetchProfile()
    }
  }

  fetchProfile = async () => {
    try {
      // dont need to call /me, can call score end point and populate it with user data
      const response = await axios.get("api/scores/my-score");
      const avatarUrl = `/api/users/me/avatar`
      if (response.data.success) {
        this.setState((state) => {
          return {
            loaded: true,
            error: undefined,
            email: response.data.email,
            username: response.data.username,
            avatarFile: undefined,
            avatarURL: avatarUrl,
            scoreCard: response.data.scoreCard
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
    return <div>FETCHING YOUR PROFILE NOW</div>;
  };
  renderProfile = () => {
    return (
      <div className="profile-card">
        <div className="top-card"></div>
        <div className="image-container">
          <div className="image-upload">
            <label htmlFor="file-input">
              <img src={this.state.avatarURL} />
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
          <h3>{this.state.description}</h3>
        </div>
        <div className="contact-details">
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
        {this.state.error && (
          <div>{this.state.error}</div>
        )}
      </div>
    );
  };

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        {!this.state.loaded && this.renderLoader()}
        {this.state.loaded && this.renderProfile()}
      </React.Fragment>
    );
  }
}

export default ProfileCard;
