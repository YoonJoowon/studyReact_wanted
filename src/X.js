import React, { useState } from 'react';
import './App.css';

function X(props) {
    const [visible, setVisible] = useState(true);
  
    const handleClick = () => {
      setVisible(false);
    };
  
    return visible ? (
      <div>
        <p>내용</p>
        <button onClick={handleClick}>X</button>
      </div>
    ) : null;
  }

export default X;