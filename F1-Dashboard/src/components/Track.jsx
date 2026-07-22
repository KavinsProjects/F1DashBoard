import React, { useEffect, useState } from "react";

const Track = ({ race, loading }) => {
  const circuitId = race?.Circuit?.circuitId;
  const circuitName = race?.Circuit?.circuitName || "Circuit Map";
  const [imgUrl, setImgUrl] = useState(`https://kavinsprojects.github.io/F1_Track_API/track-img/spa.png`);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (circuitId) {
      setImgUrl(`https://kavinsprojects.github.io/F1_Track_API/track-img/${circuitId}.png`);
      setHasError(false);
    }
  }, [circuitId]);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to Spa if specific track doesn't exist in the API repo
      setImgUrl(`https://kavinsprojects.github.io/F1_Track_API/track-img/Hungarain_Circuit.png`);
    }
  };

  if (loading) {
    return (
      <div className="f1-card" style={{ width: "100%" }}>
        <h2 className="f1-title">
          <span className="f1-title-accent">🏎</span> CIRCUIT LAYOUT
        </h2>
        <div
          style={{
            height: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="f1-pulse" style={{ color: "var(--f1-text-secondary)", fontWeight: "bold" }}>
            LOADING TELEMETRY...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">🏎</span> CIRCUIT LAYOUT
      </h2>

      <div
        style={{
          background: "#0A0A0F",
          border: "1px solid var(--f1-border)",
          borderRadius: "6px",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px",
          height: "220px",
        }}
      >
        <img
          src={imgUrl}
          alt={circuitName}
          onError={handleImageError}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      <div style={{ fontSize: "13px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid rgba(255,255,255,0.02)",
          }}
        >
          <span style={{ color: "var(--f1-text-secondary)", fontWeight: "bold" }}>CIRCUIT ID</span>
          <span
            style={{
              fontFamily: "monospace",
              color: "var(--f1-red)",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {circuitId || "UNKNOWN"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid rgba(255,255,255,0.02)",
          }}
        >
          <span style={{ color: "var(--f1-text-secondary)", fontWeight: "bold" }}>LOCATION</span>
          <span style={{ color: "white", fontWeight: "600" }}>
            {race?.Circuit?.Location?.locality}, {race?.Circuit?.Location?.country}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
          }}
        >
          <span style={{ color: "var(--f1-text-secondary)", fontWeight: "bold" }}>COORDINATES</span>
          <span style={{ fontFamily: "monospace", color: "var(--f1-text-secondary)" }}>
            {race?.Circuit?.Location?.lat}° N, {race?.Circuit?.Location?.long}° E
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;