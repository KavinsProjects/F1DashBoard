import axios from "axios";
import React, { useEffect, useState } from "react";

const getTeamColor = (key) => {
  if (!key) return "var(--f1-border)";
  const id = key.toLowerCase();

  if (id.includes("red_bull") || id.includes("red bull")) return "var(--team-redbull)";
  if (id.includes("ferrari")) return "var(--team-ferrari)";
  if (id.includes("mercedes")) return "var(--team-mercedes)";
  if (id.includes("mclaren")) return "var(--team-mclaren)";
  if (id.includes("aston_martin") || id.includes("aston martin")) return "var(--team-astonmartin)";
  if (id.includes("alpine")) return "var(--team-alpine)";
  if (id.includes("haas")) return "var(--team-haas)";
  if (id.includes("williams")) return "var(--team-williams)";
  if (id.includes("rb") || id.includes("racing_bulls") || id.includes("racing bulls") || id.includes("visa")) return "var(--team-rb)";
  if (id.includes("sauber") || id.includes("kick") || id.includes("stake")) return "var(--team-sauber)";

  return "var(--f1-border)";
};

const ConstructorStandings = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://api.jolpi.ca/ergast/f1/current/constructorStandings/?format=json"
        );
        setData(response);
      } catch (error) {
        console.error("Wrong", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const standingsList = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [];
  const leaderPoints = standingsList.length > 0 ? parseFloat(standingsList[0].points) || 1 : 1;

  if (loading) {
    return (
      <div className="f1-card" style={{ width: "100%" }}>
        <h2 className="f1-title">
          <span className="f1-title-accent">🏆</span> CONSTRUCTOR STANDINGS
        </h2>
        <div style={{ height: "320px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="f1-pulse" style={{ color: "var(--f1-text-secondary)", fontWeight: "bold" }}>
            ACQUIRING TEAM TELEMETRY...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="f1-card" style={{ width: "100%", padding: "20px" }}>
      <h2 className="f1-title">
        <span className="f1-title-accent">🏆</span> CONSTRUCTOR STANDINGS
      </h2>

      {/* Table Headers */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 12px 5px",
          fontSize: "11px",
          fontWeight: "bold",
          color: "var(--f1-text-muted)",
          letterSpacing: "1px",
          borderBottom: "1px solid var(--f1-border)",
        }}
      >
        <span style={{ width: "30px" }}>POS</span>
        <span style={{ flex: 1, marginLeft: "10px" }}>CONSTRUCTOR</span>
        <span style={{ width: "60px", textAlign: "right" }}>PTS</span>
      </div>

      {/* Standings List */}
      <div
        style={{
          maxHeight: "350px",
          overflowY: "auto",
          marginTop: "5px",
        }}
      >
        {standingsList.map((team) => {
          const teamColor = getTeamColor(team.Constructor.constructorId || team.Constructor.name);
          const pointsPct = leaderPoints > 0 ? (parseFloat(team.points) / leaderPoints) * 100 : 0;

          return (
            <div
              key={team.position}
              className="f1-table-row"
              style={{
                paddingLeft: "15px",
                borderLeft: `4px solid ${teamColor}`,
              }}
            >
              {/* Position */}
              <span
                style={{
                  width: "30px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: team.position <= 3 ? "var(--f1-red)" : "white",
                }}
              >
                {team.position}
              </span>

              {/* Constructor Name */}
              <span
                style={{
                  flex: 1,
                  marginLeft: "10px",
                  fontWeight: "700",
                  color: "white",
                  fontSize: "13px",
                  textTransform: "uppercase",
                }}
              >
                {team.Constructor.name}
              </span>

              {/* Points */}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  width: "60px",
                  textAlign: "right",
                  fontFamily: "monospace",
                }}
              >
                {team.points}
              </span>

              {/* Underlying telemetry progress bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "rgba(255,255,255,0.01)",
                }}
              >
                <div
                  style={{
                    width: `${pointsPct}%`,
                    height: "100%",
                    background: teamColor,
                    opacity: 0.25,
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConstructorStandings;