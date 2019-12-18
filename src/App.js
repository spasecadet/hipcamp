import React from 'react';

// Custom components
import Header from './components/Header';
import Features from './components/Features';
import H1 from './components/textElements/H1';
import H2 from './components/textElements/H2';

// Styles
import './App.scss';

// Images
import campsiteImg from './images/campsite.jpeg';

/**
 * Holds the main components for this single-single page application.
 */
function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="contentContainer">
        <div className="content">
          <img className="campsiteImage" src={campsiteImg} alt="campsite" />
          <H1>Camp Sweet Camp</H1>

          {/* I really do love camping, but I was having too much fun writing this :D */}
          <p>This bare bones luxury site is set to impress with its incredible list of minimalist ammenities.  Enjoy king size fields with freshly grown grass for your best night's sleep.  There's nothing like having nature light your way at night with the collectors eddition Starlight&trade; overhead lighting - automatic nightlights will become invisible during the day.  Now includes built in white noise generator: select from frogs, crickets, or single mosquito.  Friendly neighbors enjoy salmon sashimi and can help show you the best way to get food out of an ice chest.</p>
          <H2>Features</H2>
          <Features></Features>
        </div>
      </div>
    </div>
  );
}

export default App;
