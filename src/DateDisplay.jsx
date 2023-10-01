import React, { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hint-text">
      <p>{currentDateTime.toLocaleString()}</p>
    </div>
  );
}

export default DateTimeDisplay;
