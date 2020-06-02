import React from "react";
import ProfileCard from "./ProfileCard";

const ProfilePage = (props) => {
  const { loggedIn } = props;
  const renderProfile = () => {
    return (
        <ProfileCard />
    )
  };
  const renderLoginNotice = () => {
    return <div>Please login to continue</div>;
  };
  return (
    <div className="app-body">
      <div className="app-container">
        {loggedIn && renderProfile()}
        {!loggedIn && renderLoginNotice()}
      </div>
    </div>
  );
};

export default ProfilePage;
