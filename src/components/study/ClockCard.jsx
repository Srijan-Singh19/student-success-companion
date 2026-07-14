import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

export default function ClockCard() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const currentTime = time.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const currentDate = time.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const hour = time.getHours();

    let greeting = "";

    if (hour < 12) greeting = "🌞 Good Morning";
    else if (hour < 17) greeting = "☀️ Good Afternoon";
    else greeting = "🌙 Good Evening";

    return (
        <div className="clock-card">

            <FaClock className="clock-icon" />

            <h2>{currentTime}</h2>

            <p>{currentDate}</p>

            <span>{greeting}</span>

        </div>
    );
}