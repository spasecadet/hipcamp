import React from 'react';
import './H2.scss';

/**
 * Simple component used to encapsulate the style of an h2.
 * 
 * * example:
 * <H2>Some text</H2>
 *
 * @param {Object} props - children is pulled out of props
 */
function H2({children}) {
  return (
    <h2 className="h2">{children}</h2>
  );
}

export default H2;
