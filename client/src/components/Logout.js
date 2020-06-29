import React from "react";
import axios from 'axios'
import '../styles/Logout.css'

const Logout = (props) => {
  const handleLogout = async () => {
    try {
      axios.post('/api/users/logout')
      props.history.push('/')
      window.location.reload()
    } catch(e) {
      alert(`Sorry, you're stuck logged in!`)
    }
  }
  const handleCancelLogout = () => {
    props.history.push('/')
  }
  return (
    <div className="app-body">
      <div className="app-container"></div>
      <div className='logout-label'>Are you sure you wish to logout?</div>
      <div className='logout-buttons__container'>
        <button onClick={handleLogout}>Yes</button>
        <button onClick={handleCancelLogout}>No</button>
      </div>

    </div>
  );
};

export default Logout;
