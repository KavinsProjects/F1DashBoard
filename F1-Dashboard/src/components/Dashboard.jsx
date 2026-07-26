import React, { useEffect, useState } from "react";
import axios from "axios";
import Track from "./Track";
import UpcomingRace from "./UpcoemingRace";
import WeekendSchedule from "./WeekendSchedule";
import ConstructorStandings from "./ConstructorStandings";
import CurrentDrivers from "./CurrentsDriver";
import Winner from "./Winner";
import LastWeekend from "./LastWeekend";
import dutchWinner from "../assets/dutch_winner.png";

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
        maxWidth: "1600px",
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
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "#E10600",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          PIT WALL
        </h1>
      </header>

      {/* Top Row: Latest Results, Next Grand Prix, Weekend Schedule, Circuit Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "25px",
        }}
      >
        <div style={{ flex: "1 1 340px", display: "flex" }}>
          <Winner />
        </div>
        <div style={{ flex: "1 1 340px", display: "flex" }}>
          <UpcomingRace race={nextRace} loading={loading} />
        </div>
        <div style={{ flex: "1 1 340px", display: "flex" }}>
          <WeekendSchedule race={nextRace} loading={loading} />
        </div>
        <div style={{ flex: "1 1 340px", display: "flex" }}>
          <LastWeekend />
        </div>
        <div style={{ flex: "1 1 340px", display: "flex" }}>
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
        <div style={{ flex: "1 1 340px", display: "flex" }}>
          <CurrentDrivers />
        </div>

        <div style={{ flex: "1 1 340px", display: "flex" }}>
          <ConstructorStandings />
        </div>
      </div>

      {/* Champion's Celebration Banner (Bottom of the Dashboard) */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
        }}
      >
        <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
          <h2 className="f1-title">
            <span className="f1-title-accent">🏆</span> CHAMPION'S CELEBRATION
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
              height: "480px",
              overflow: "hidden",
            }}
          >
            <img
              src={dutchWinner}
              alt="Oscar Piastri Victory Celebration"
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
           Lando Norris celebrating victory at the Dutch Grand Prix!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;