import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEngine } from '../../engine/redux/engineActions';
import type { RootState } from '../../../app/rootReducer';

const EnableEngineButton = () => {
  const dispatch = useDispatch();
  const engineEnabled = useSelector((state: RootState) => state.engine.enabled);

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