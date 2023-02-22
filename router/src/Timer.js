import React, { useState, useEffect } from "react";

const Timer = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      setRemainingSeconds(
        Math.round((today.setDate(today.getDate() + 1) - now) / 1000)
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const date = new Date(remainingSeconds * 1000).toISOString();
  const time = date.substring(11, 19);
  return <div>{time}</div>;
};

export default Timer;
