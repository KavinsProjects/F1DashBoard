import React, { useEffect, useState } from "react";

const UpcomingRace = ({ race, loading }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false,
  });

  useEffect(() => {
    if (!race) return;

    const calculateTimeLeft = () => {
      const raceDateTimeString = race.time
        ? race.time.includes("Z")
          ? `${race.date}T${race.time}`
          : `${race.date}T${race.time}Z`
        : `${race.date}T00:00:00Z`;

      const raceDateTime = new Date(raceDateTimeString);
      const now = new Date();
      const difference = raceDateTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, completed: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        completed: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [race]);

  if (loading || !race) {
    return (
      <div className="f1-card" style={{ width: "100%" }}>
        <h2 className="f1-title">
          <span className="f1-title-accent">🏎️</span> NEXT GRAND PRIX
        </h2>
        <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--f1-text-secondary)" }}>
          <div className="f1-pulse" style={{ fontSize: "13px", fontWeight: "500" }}>
            ACQUIRING TELEMETRY...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">🏎️</span> NEXT GRAND PRIX
      </h2>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
        {/* Race Header details */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>
            <span
              style={{
                background: "rgba(225, 6, 0, 0.1)",
                color: "var(--f1-red)",
                border: "1px solid var(--f1-red)",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              ROUND {race.round}
            </span>
            <span style={{ fontSize: "11px", color: "var(--f1-text-secondary)", fontFamily: "monospace" }}>
              {race.date}
            </span>
          </div>

          <h3
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "12px",
              lineHeight: "1.3",
            }}
          >
            {race.raceName.toUpperCase()}
          </h3>

          <p
            style={{
              color: "var(--f1-text-secondary)",
              fontSize: "12px",
              marginTop: "6px",
              lineHeight: "1.4",
            }}
          >
            📍 {race.Circuit?.circuitName}
            <br />
            <span style={{ color: "var(--f1-text-muted)", fontSize: "11px" }}>
              {race.Circuit?.Location?.locality}, {race.Circuit?.Location?.country}
              <p>he Hungarian Grand Prix is one of the most historic races in Formula 1, first held in 1986,
                making it the first F1 race staged behind the Iron Curtain. It has been held every year at the 
                Hungaroring, a 4.381 km circuit located near Budapest, Hungary. The track is known for its 
                tight, twisty layout, which makes overtaking difficult and rewards precision and strategy. Over the years,
                many legendary drivers, including Lewis Hamilton and Michael Schumacher, have enjoyed success at the Hungaroring.
                The race is a fan favourite because of its exciting atmosphere and challenging circuit. In the 2025 Hungarian
                Grand Prix, Lando Norris of McLaren claimed victory after a strong performance, giving McLaren its 200th Formula 1 win.
                The race was held at the Hungaroring on 3 August 2025, with Oscar Piastri finishing second and George Russell taking third place
              </p>
            </span>
            <P>
              The Hungarian Grand Prix is one of the most historic races in Formula 1, first held in 1986, making it the first F1 race staged behind the Iron Curtain. It has been held every year at the Hungaroring, a 4.381 km circuit located near Budapest, Hungary. The track is known for its tight, twisty layout, which makes overtaking difficult and rewards precision and strategy. Over the years, many legendary drivers, including Lewis Hamilton and Michael Schumacher, have enjoyed success at the Hungaroring. The race is a fan favourite because of its exciting atmosphere and challenging circuit. In the 2025 Hungarian Grand Prix, Lando Norris of McLaren claimed victory after a strong performance, giving McLaren its 200th Formula 1 win. The race was held at the Hungaroring on 3 August 2025, with Oscar Piastri finishing second and George Russell taking third place.
            </P>
          </p>

          {race.Circuit?.circuitId === "spa" && (
            <p
              style={{
                color: "var(--f1-text-secondary)",
                fontSize: "11px",
                lineHeight: "1.6",
                marginTop: "12px",
                padding: "10px",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "4px",
                borderLeft: "3px solid var(--f1-red)",
              }}
            >
              Circuit de Spa-Francorchamps is one of the most iconic and challenging Formula 1 circuits in the world, located in the Ardennes forest of Belgium. Opened in 1921, the track is 7.004 km long and is famous for its fast corners and unpredictable weather. Its legendary Eau Rouge–Raidillon section is considered one of the greatest sequences in motorsport. Drivers complete 44 laps during the Belgian Grand Prix, covering a total race distance of 308.052 km. Spa's combination of long straights, sweeping corners, and elevation changes makes it a favorite among both drivers and fans.
            </p>
          )}
        </div>

        {/* Small Minimalist Countdown */}
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#0A0A0F",
            border: "1px solid var(--f1-border)",
            borderRadius: "6px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "var(--f1-text-muted)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Race Countdown
            </span>
            <span
              style={{
                width: "6px",
                height: "6px",
                background: timeLeft.completed ? "var(--f1-text-muted)" : "var(--f1-red)",
                borderRadius: "50%",
                display: "inline-block",
              }}
              className={timeLeft.completed ? "" : "f1-pulse"}
            ></span>
          </div>

          {!timeLeft.completed ? (
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "15px",
                fontWeight: "700",
                color: "white",
                marginTop: "4px",
                letterSpacing: "0.5px",
              }}
            >
              {timeLeft.days}d {String(timeLeft.hours).padStart(2, "0")}h{" "}
              {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s
            </div>
          ) : (
            <div
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "var(--f1-red)",
                marginTop: "4px",
                textTransform: "uppercase",
              }}
            >
              ⚡ LIVE ACTION UNDERWAY
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingRace;