import { useEffect, useState } from "react";

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
        {/* Race Countdown (Timer First) */}
        <div
          style={{
            marginBottom: "15px",
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

        {/* Race Header details */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>

        {race.Circuit?.circuitId === "monza" && (
          <div
            style={{
              marginBottom: "15px",
              border: "1px solid var(--f1-border)",
              borderRadius: "6px",
              overflow: "hidden",
              background: "#0A0A0F",
            }}
          >
            <img
              src="https://media.formula1.com/image/upload/t_16by9North/c_fit,w_1584/q_auto/v1740000001/trackside-images/2026/F1_Grand_Prix_of_Italy/2293775105.webp"
              alt="Monza race day at the 2026 Italian Grand Prix"
              style={{ width: "100%", height: "130px", objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: "10px" }}>
              <div style={{ color: "white", fontSize: "12px", fontWeight: "700", marginBottom: "6px" }}>
                MONZA RACE DAY
              </div>
              <p style={{ color: "var(--f1-text-secondary)", fontSize: "11px", lineHeight: "1.5" }}>
                The Temple of Speed hosts the 2026 Italian Grand Prix. Monza is 5.793 km long,
                the race runs for 53 laps, and the total distance is 306.72 km.
              </p>
              <p style={{ color: "var(--f1-text-secondary)", fontSize: "11px", lineHeight: "1.5", marginTop: "7px" }}>
                Built in 1922 and a Formula 1 venue since 1950, Monza is Ferrari's home circuit.
                The 2025 Italian GP winner was Max Verstappen.
              </p>
            </div>
          </div>
        )}
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
            </span>
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

          {(race.Circuit?.circuitId === "zandvoort" || 
            race.Circuit?.circuitName?.toLowerCase().includes("zandvoort") || 
            race.Circuit?.circuitName?.toLowerCase().includes("dutch")) && (
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
              The <strong>Dutch Grand Prix</strong>, first held in <strong>1952</strong>, is one of Formula 1's most historic races. It is held at <strong>Circuit Zandvoort</strong>, a <strong>4.259 km</strong> circuit located on the North Sea coast in the Netherlands. Famous for its fast, flowing corners, dramatic elevation changes, and steeply banked turns, Zandvoort is a true driver's circuit that demands precision, commitment, and confidence. The passionate sea of orange-clad fans creates one of the most electrifying atmospheres on the Formula 1 calendar, making the Dutch Grand Prix a standout event each season. In the <strong>2025 Dutch Grand Prix, Oscar Piastri</strong> secured victory for McLaren after converting pole position into a dominant win. Max Verstappen finished second on home soil, while Isack Hadjar claimed his maiden Formula 1 podium by finishing third.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingRace;