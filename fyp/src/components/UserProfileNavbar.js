import React from 'react';
import { NavLink } from 'react-router-dom';

const UserProfileNavbar = () => {
  const logouthandler = ()=>{
    localStorage.clear();
  }
  return (
    <>
      
      <nav>
        <ul>
          <li><NavLink className="nav-link" to="/userprofile">Profile</NavLink></li>
          <li><NavLink className="nav-link" to="/signin" onClick={logouthandler}>Logout</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default UserProfileNavbar;