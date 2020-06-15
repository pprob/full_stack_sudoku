import React from "react";
import axios from "axios";
import "../styles/ProfileCard.css";

class ProfileCard extends React.Component {
  //Change state to API call after making player card - test values for now
  state = {
    loaded: true,
    error: undefined,
    email: "test@test.com",
    username: "testuser12345",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  handleImageClick = async () => {
    console.log('img clicked')
  }
  fetchProfile = async () => {
    try {
      // dont need to call /me, can call score end point and populate it with user data
      const response = await axios.get("api/users/me");
      if (response.data.success) {
        this.setState((state) => {
          return {
            loaded: true,
            error: undefined,
            email: response.data.email,
            username: response.data.username,
          };
        });
      }
    } catch (e) {
      this.setState((state) => ({
        loaded: false,
        error: "Could not fetch profile",
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
          <img src="https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png" onClick={this.handleImageClick}></img>
        </div>
        <div className="card-content">
          <h1>{this.state.username}</h1>
          <h2>{this.state.email}</h2>
          <h3>{this.state.description}</h3>
        </div>
        <div className='contact-details'>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
      </div>
    );
  };
  // componentDidMount = () => {
  //     this.fetchProfile()
  // };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {!this.state.loaded && this.renderLoader()}
        {this.state.loaded && this.renderProfile()}
      </React.Fragment>
    );
  }
}

export default ProfileCard;
