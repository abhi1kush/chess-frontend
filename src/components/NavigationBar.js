// src/components/NavigationBar.js
import React from 'react';
import PropTypes from 'prop-types';

const NavigationBar = ({ buttons }) => {
  return (
    <nav className="top-bar">
      {buttons.map((ButtonComponent, index) => (
        <ButtonComponent key={index} />
      ))}
    </nav>
  );
};

NavigationBar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default NavigationBar;