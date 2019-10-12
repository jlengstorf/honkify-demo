/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import honkify from 'honkify';

const Honker = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const unregister = honkify();
      return () => unregister();
    }
  }, [isActive]);

  const toggleHonk = () => {
    setActive(isActive => !isActive);
  };

  return (
    <button onClick={toggleHonk} className="no-honk" sx={{ variant: 'button.hollow' }}>
      {isActive ? 'unhonk' : 'honk!'}
    </button>
  );
};

export default Honker;
