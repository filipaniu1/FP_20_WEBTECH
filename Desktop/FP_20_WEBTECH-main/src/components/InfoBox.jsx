import React from 'react';

function InfoBox({ tech, onClick }) {
  return (
    <button 
      onClick={() => onClick(tech)}
      style={{
        padding: '10px 15px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f0f0f0'
      }}
    >
      {tech}
    </button>
  );
}

export default InfoBox;