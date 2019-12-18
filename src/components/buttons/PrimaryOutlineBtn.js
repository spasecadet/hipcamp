import React from 'react';
import './PrimaryOutlineBtn.scss';

/**
 * Simple component used to encapsulate the style of a button with an outline.  
 * Although the name of this button is "Primary..." it is set to the secondary 
 * brand color.  In this context I mean primary to refer to the button's use 
 * case, not to its color.
 * 
 * example:
 * <PrimaryOutlineBtn handleClick={() => {console.log('do something')}}></PrimaryOutlineBtn>
 *
 * @param {Object} props - children and handleClick are pulled out of props
 */
function PrimaryOutlineBtn({children, handleClick}) {
  
  return (
    <button className="primaryOutline" onClick={handleClick}>{children}</button>
  );
}

export default PrimaryOutlineBtn;
