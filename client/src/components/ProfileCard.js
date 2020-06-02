import React from "react";
import axios from "axios";

class ProfileCard extends React.Component {
  state = {
    loaded: false,
    error: undefined,
    email: undefined,
    username: undefined,
  };
  fetchProfile = async () => {
    try {
      const response = await axios.get("api/users/me");
      if (response.data.success) {
        this.setState((state) => {
            return {
                loaded: true,
                error: undefined,
                email: response.data.email,
                username: response.data.username
            }
        })
      }
    } catch (e) {
        this.setState((state) => ({
            loaded: false,
            error: 'Could not fetch profile'
        }))
    }
  };
  renderLoader = () => {
      return (
          <div>FETCHING YOUR PROFILE NOW</div>
      )
  }
  renderProfile = () => {
    return (
        <div className='profile-container'>
          <div>Profile here - work in progress</div>
        </div>
    )
  }
  componentDidMount = () => {
      this.fetchProfile()
  };

  render() {
      console.log(this.state)
    return (
        <div>
            {!this.state.loaded && this.renderLoader()}
            {this.state.loaded && this.renderProfile()}
        </div>
    )
  }
}

export default ProfileCard;
