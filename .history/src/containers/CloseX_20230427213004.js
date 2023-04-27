import React, { useState } from 'react';

function CloseX(props) {
    const [visible, setVisible] = useState(true);
  
    const handleClick = () => {
      setVisible(false);
    };
  
    return visible ? (
      <div>
        <button onClick={handleClick}>X</button>
      </div>
    ) : null;
  }

export default CloseX;