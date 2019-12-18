import React from 'react';
import PrimaryOutlineBtn from './buttons/PrimaryOutlineBtn';
import logo from '../images/logo.png';
import './Header.scss';

/**
 * Header for Contemporary Biouvac site.  
 * 
 * example: 
 * <Header><Header>
 */
function Header() {

  /**
   * Theoretically would allow a user to sign in if this functionality 
   * existed.  Just logs to the console for now.
   */
  const handleSigninClick = () => {
    console.log('handle sign in');
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="Contemporary Bivouac" />
      </div>
      <div className="signinContainer">
        <PrimaryOutlineBtn handleClick={handleSigninClick}>Sign In</PrimaryOutlineBtn>
      </div>
    </div>
  );
}

export default Header;
