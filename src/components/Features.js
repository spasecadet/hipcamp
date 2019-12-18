import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';
import colors from '../lib/colors';
import './Features.scss';

/**
 * Features component contains the logic for displaying the list of features 
 * for a particular site.  This component is not really expected to be reused, 
 * just to encapsulate the features logic.
 * 
 * example: 
 * <Features></Features>
 */
function Features() {
  const [featuresList, setFeaturesList] = useState([]);

  /**
   * Toggle a list of subfeatures open or closed.
   * 
   * @param {Event} e 
   */
  const toggleExpandCollapse = (e) => {
    e.currentTarget.parentNode.classList.toggle('expanded');
  };

  /**
   * Recursively loops through nested arrays of objects to create lists of 
   * features and subfeatures.
   * 
   * @param {[Object]} featuresList 
   */
  const recursivelyListFeatures = (featuresList) => {
    return featuresList.map((feature) => {
      const hasSubfeatures = feature.subfeatures.length > 0;
      const subfeatures = hasSubfeatures ? recursivelyListFeatures(feature.subfeatures) : [];

      const featurePresent = { icon: 'check_circle', color: colors.primary };
      const featureNotPresent = { icon: 'highlight_off', color: colors.tertiary };
      const featureIndicator = feature.presence ? featurePresent : featureNotPresent;

      return (
        <li key={feature.title}>
          <Icon className="listIcons" style={{color: featureIndicator.color}}>{featureIndicator.icon}</Icon>
          
          {hasSubfeatures ?
            <>
              {/* Note: this button logic is so specific that it doesn't really make 
              sense to make it into a component, though if we were going to have similar 
              drop down components in more than one place I'd consider making a resuable 
              dropdown component - or finding a library. */}
              <button className="expandableBtn" onClick={toggleExpandCollapse}>
                {feature.title}
                <Icon className="expandList" style={{ color: colors.quaternary }}>keyboard_arrow_right</Icon>
                <Icon className="collapseList" style={{ color: colors.quaternary }}>keyboard_arrow_down</Icon>
              </button>
              
              <ul className="subfeaturesList">{subfeatures}</ul>
            </> :
            feature.title
          }
        </li>
      );
    });
  };

  /**
   * After the initial DOM update, create and display the list of features.  
   * We don't REALLY need to use useEffect here since the window.FEATURES 
   * data already exists and we don't have to make a call for it, but this 
   * is what I'd expect to do in a normal situation.  Only called once.
   */
  useEffect(() => {
    const features = recursivelyListFeatures(window.FEATURES);
    setFeaturesList(features);
  }, []);

  return (
    <div className="featuresContainer">
      <ul className="topFeatures">{featuresList}</ul>
    </div>
  );
}

export default Features;
