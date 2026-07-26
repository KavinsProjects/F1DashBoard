import React from "react";
import todayWinner from "../assets/winner.jpg";

const Winner = () => {
  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">🏁</span> LATEST RACE RESULTS
      </h2>
      <div
        style={{
          background: "#0A0A0F",
          border: "1px solid var(--f1-border)",
          borderRadius: "6px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "420px",
          overflow: "hidden",
        }}
      >
        <img
          src={todayWinner}
          alt="Hungarian Grand Prix Results"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "4px",
          }}
          className="hover-zoom"
        />
      </div>
      <div
        style={{
          fontSize: "12px",
          marginTop: "12px",
          color: "var(--f1-text-secondary)",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        📊 Hungary Grand Prix podium: Norris (P1), Verstappen (P2), Antonelli (P3)
      </div>
    </div>
  );
};

export default Winner;