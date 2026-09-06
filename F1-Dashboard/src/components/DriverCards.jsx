import axios from "axios";
import { useEffect, useState } from "react";

const getTeamColor = (key) => {
  const id = (key || "").toLowerCase();

  if (id.includes("red_bull") || id.includes("red bull")) return "var(--team-redbull)";
  if (id.includes("ferrari")) return "var(--team-ferrari)";
  if (id.includes("mercedes")) return "var(--team-mercedes)";
  if (id.includes("mclaren")) return "var(--team-mclaren)";
  if (id.includes("aston_martin") || id.includes("aston martin")) return "var(--team-astonmartin)";
  if (id.includes("alpine")) return "var(--team-alpine)";
  if (id.includes("haas")) return "var(--team-haas)";
  if (id.includes("williams")) return "var(--team-williams)";
  if (id.includes("rb") || id.includes("racing bulls") || id.includes("visa")) return "var(--team-rb)";
  if (id.includes("sauber") || id.includes("kick") || id.includes("stake")) return "var(--team-sauber)";

  return "var(--f1-border-active)";
};

const DriverCards = () => {
  const [drivers, setDrivers] = useState([]);
  const [driverImages, setDriverImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const { data } = await axios.get(
          "https://api.jolpi.ca/ergast/f1/current/driverStandings/?format=json"
        );
        const standings = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];
        setDrivers(standings);

        const imageEntries = await Promise.all(
          standings.map(async ({ Driver }) => {
            try {
              const pageTitle = Driver.url.split("/wiki/")[1];
              const response = await axios.get(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`
              );
              return [Driver.driverId, response.data?.thumbnail?.source || null];
            } catch {
              return [Driver.driverId, null];
            }
          })
        );
        setDriverImages(Object.fromEntries(imageEntries));
      } catch (error) {
        console.error("Something went wrong while fetching the driver grid", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <section className="driver-grid-section">
      <div className="driver-grid-heading">
        <div>
          <p className="driver-grid-kicker">2026 SEASON</p>
          <h2 className="driver-grid-title">DRIVER GRID</h2>
          <p className="driver-grid-description">Meet the drivers competing for every point in the 2026 Formula 1 season.</p>
        </div>
        <span className="driver-grid-count">{drivers.length || 0} DRIVERS</span>
      </div>

      {loading ? (
        <div className="driver-grid-loading f1-pulse">ACQUIRING DRIVER GRID...</div>
      ) : (
        <div className="driver-grid">
          {drivers.map((entry) => {
            const driver = entry.Driver;
            const team = entry.Constructors?.[0];
            const teamColor = getTeamColor(team?.constructorId || team?.name);

            return (
              <article className="driver-card" key={driver.driverId} style={{ "--driver-team": teamColor }}>
                <div className="driver-card-topline">
                  <span className="driver-position">{String(entry.position).padStart(2, "0")}</span>
                  <span className="driver-number">#{driver.permanentNumber || "--"}</span>
                </div>
                <div className="driver-card-portrait">
                  {driverImages[driver.driverId] ? (
                    <img
                      src={driverImages[driver.driverId]}
                      alt={`${driver.givenName} ${driver.familyName}`}
                    />
                  ) : (
                    <span>{driver.givenName[0]}{driver.familyName[0]}</span>
                  )}
                </div>
                <div className="driver-card-name">
                  <span>{driver.givenName}</span>
                  <strong>{driver.familyName}</strong>
                </div>
                <div className="driver-card-footer">
                  <span className="driver-team">{team?.name || "Independent"}</span>
                  <span className="driver-points">{entry.points} PTS</span>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default DriverCards;