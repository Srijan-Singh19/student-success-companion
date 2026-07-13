import { useEffect, useState } from "react";

export default function ClockCard() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const currentTime = time.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  const currentDate = time.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const day = time.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const hour = time.getHours();

  let greeting = "";
  let quote = "";

  if (hour < 12) {
    greeting = "🌞 Good Morning";
    quote = "Start your day with purpose.";
  } else if (hour < 17) {
    greeting = "☀️ Good Afternoon";
    quote = "Small progress is still progress.";
  } else if (hour < 21) {
    greeting = "🌇 Good Evening";
    quote = "Stay consistent. Success follows discipline.";
  } else {
    greeting = "🌙 Good Night";
    quote = "Rest well. Tomorrow is another opportunity.";
  }

  return (
    <div className="clock-card">

      <h2>{greeting}</h2>

      <p className="quote">{quote}</p>

      <h3>{currentDate}</h3>

      <p>{day}</p>

      <h1>{currentTime}</h1>

    </div>
  );
}