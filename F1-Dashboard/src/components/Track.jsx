import React from "react";
import RaceTrackImg from "../assets/spa-rackmap.png";

const RaceTrack = "Spa";

const Track = () => {
  return (
    <div
      style={{
        width: "320px",
        background: "#1A1A1A",
        border: "2px solid #E10600",
        borderRadius: "12px",
        padding: "20px",
        color: "white",
        boxShadow: "0 0 12px rgba(225,6,0,0.4)",
      }}
    >
      <h2
        style={{
          color: "#E10600",
          marginBottom: "15px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        🏎 Race Track
      </h2>

      <h3
        style={{
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        {RaceTrack}
      </h3>

      <img
        src={RaceTrackImg}
        alt={RaceTrack}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          background: "#111",
          borderRadius: "8px",
          padding: "10px",
        }}
      />
    </div>
  );
};

export default Track;