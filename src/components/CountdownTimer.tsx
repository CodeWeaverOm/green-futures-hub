import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-14T00:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-foreground/80 mb-8">Event Starts In</h2>
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} className="glass-card rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[100px]">
              <p className="text-3xl sm:text-5xl font-black gradient-text glow-text">
                {String(timeLeft[unit]).padStart(2, "0")}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default CountdownTimer;
