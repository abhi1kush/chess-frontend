import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEngine } from '../redux/actions/engineActions';
import './EnableEngineButton.css';

const EnableEngineButton = () => {
  const dispatch = useDispatch();
  const engineEnabled = useSelector(state => state.engine.enabled);

  const handleClick = () => {
    dispatch(toggleEngine());
  };

  return (
    <button 
      className={`engine-toggle-btn ${engineEnabled ? 'enabled' : 'disabled'}`} 
      onClick={handleClick}
    >
      {engineEnabled ? 'Disable Engine' : 'Enable Engine'}
    </button>
  );
};

export default EnableEngineButton;