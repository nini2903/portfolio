import React, { useState } from 'react';

function LightDarkToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
}
