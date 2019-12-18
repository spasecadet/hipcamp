import React from 'react';
import './H1.scss';

/**
 * Simple component used to encapsulate the style of an h1.
 * 
 * example:
 * <H1>Some text</H1>
 * 
 * @param {Object} props - children is pulled out of props
 */
function H1({children}) {
  return (
    <h1 className="h1">{children}</h1>
  );
}

export default H1;
