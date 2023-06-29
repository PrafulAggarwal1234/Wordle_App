import React from 'react';

const CancelButton = ({ onCancel }) => {
  return (
    <button onClick={onCancel}>X</button>
  );
};

export default CancelButton;