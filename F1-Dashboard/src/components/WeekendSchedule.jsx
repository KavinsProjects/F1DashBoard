import React from "react";

const WeekendSchedule = ({ race, loading }) => {
  const formatSessionTime = (dateStr, timeStr) => {
    if (!dateStr) return "N/A";
    try {
      const isoString = timeStr
        ? timeStr.includes("Z")
          ? `${dateStr}T${timeStr}`
          : `${dateStr}T${timeStr}Z`
        : `${dateStr}T00:00:00Z`;
      const date = new Date(isoString);

      return date.toLocaleString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    } catch (e) {
      return `${dateStr} ${timeStr || ""}`;
    }
  };

  if (loading || !race) {
    return (
      <div className="f1-card" style={{ width: "100%" }}>
        <h2 className="f1-title">
          <span className="f1-title-accent">📅</span> WEEKEND SCHEDULE
        </h2>
        <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--f1-text-secondary)" }}>
          <div className="f1-pulse" style={{ fontSize: "13px", fontWeight: "500" }}>
            ACQUIRING SCHEDULE...
          </div>
        </div>
      </div>
    );
  }

  const sessions = [
    { name: "FP1", date: race.FirstPractice?.date, time: race.FirstPractice?.time },
    { name: "FP2", date: race.SecondPractice?.date, time: race.SecondPractice?.time },
    { name: "FP3", date: race.ThirdPractice?.date, time: race.ThirdPractice?.time },
    { name: "Sprint", date: race.Sprint?.date, time: race.Sprint?.time },
    { name: "Qualifying", date: race.Qualifying?.date, time: race.Qualifying?.time },
    { name: "Grand Prix", date: race.date, time: race.time, isRace: true },
  ].filter((s) => s.date);

  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">📅</span> WEEKEND SCHEDULE
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, justifyContent: "center" }}>
        {sessions.map((session, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 10px",
              background: session.isRace ? "rgba(225, 6, 0, 0.05)" : "transparent",
              borderLeft: session.isRace
                ? "3px solid var(--f1-red)"
                : "3px solid transparent",
              borderRadius: "4px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.02)",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: session.isRace ? "700" : "500",
                color: session.isRace ? "var(--f1-red)" : "var(--f1-text-primary)",
              }}
            >
              {session.name}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "var(--f1-text-secondary)",
                fontFamily: "monospace",
              }}
            >
              {formatSessionTime(session.date, session.time)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekendSchedule;
