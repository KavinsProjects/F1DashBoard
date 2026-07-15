import React, { useEffect, useState } from "react";
import axios from "axios";
import Track from "./Track";
import UpcomingRace from "./UpcoemingRace";
import WeekendSchedule from "./WeekendSchedule";
import ConstructorStandings from "./ConstructorStandings";
import CurrentDrivers from "./CurrentsDriver";

const Dashboard = () => {
  const [nextRace, setNextRace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNextRace = async () => {
      try {
        const response = await axios.get(
          "https://api.jolpi.ca/ergast/f1/current/next.json"
        );
        const raceData = response.data?.MRData?.RaceTable?.Races?.[0];
        setNextRace(raceData || null);
      } catch (error) {
        console.error("Error fetching next race in Dashboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNextRace();
  }, []);

  return (
    <div
      style={{
        padding: "25px",
        maxWidth: "1400px",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "2px solid #E10600",
          paddingBottom: "15px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "#FFFFFF",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#E10600" }}> PIT WALL</span>
        </h1>
      </header>

      {/* Top Row: Next Grand Prix, Weekend Schedule, Circuit Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "25px",
        }}
      >
        <div style={{ flex: "1 1 300px", display: "flex" }}>
          <UpcomingRace race={nextRace} loading={loading} />
        </div>
        <div style={{ flex: "1 1 300px", display: "flex" }}>
          <WeekendSchedule race={nextRace} loading={loading} />
        </div>
        <div style={{ flex: "1 1 300px", display: "flex" }}>
          <Track race={nextRace} loading={loading} />
        </div>
      </div>

      {/* Bottom Row: Standings */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <div style={{ flex: "1 1 300px", display: "flex" }}>
          <CurrentDrivers />
        </div>
        <div style={{ flex: "1 1 300px", display: "flex" }}>
          <ConstructorStandings />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;