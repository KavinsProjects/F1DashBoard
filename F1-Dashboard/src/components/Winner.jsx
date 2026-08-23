import React from "react";
import todayWinner from "../assets/winner.jpg";

const Winner = () => {
  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">🏁</span> ZANDVOORT WINNER
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "420px",
          overflow: "hidden",
        }}
      >
        <img
          src={todayWinner}
          alt="Zandvoort Grand Prix winner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
        🏆 Zandvoort winner: Norris (P1)
      </div>
    </div>
  );
};

export default Winner;