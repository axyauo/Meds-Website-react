import React, { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };

    return timeLeft;
  }

  return (
    <div className="countdown-timer">
      <div className="time-box">{timeRemaining.days}</div>
      <div className="colon">:</div>
      <div className="time-box">{timeRemaining.hours}</div>
      <div className="colon">:</div>
      <div className="time-box">{timeRemaining.minutes}</div>
      <div className="colon">:</div>
      <div className="time-box">{timeRemaining.seconds}</div>
    </div>
  );
}
