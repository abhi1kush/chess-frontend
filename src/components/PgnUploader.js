import React from 'react';
import PropTypes from 'prop-types';

// Pure function to read file content
const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

const PgnUploader = ({ onLoadPGN }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      readFileContent(file)
        .then((pgnData) => {
          onLoadPGN(pgnData);
        })
        .catch((error) => {
          console.error('Error reading PGN file:', error);
        });
    }
  };

  return (
    <label className="action-button upload-btn">
      Upload PGN
      <input type="file" accept=".pgn" onChange={handleFileUpload} hidden />
    </label>
  );
};

PgnUploader.propTypes = {
  onLoadPGN: PropTypes.func.isRequired,
};

export default PgnUploader;