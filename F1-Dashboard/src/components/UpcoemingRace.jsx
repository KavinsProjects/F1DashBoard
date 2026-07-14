import React, { useEffect, useState } from "react";
import axios from "axios";

const UpcomingRace = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://api.jolpi.ca/ergast/f1/current/next.json"
        );

        setData(response);
        console.log(response);
      } catch (error) {
        console.error("There was an error fetching the API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
  style={{
    
    minHeight: "200vh",
    padding: "20px",
    color: "white",
  }}
>
  <h2
    style={{
      color: "#E10600",
      marginBottom: "20px",
      textTransform: "uppercase",
    }}
  >
    🏎️Upcoming Races
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    }}
  >
    {data?.MRData?.RaceTable?.Races?.map((race) => (
      <div
        key={race.round}
        style={{
          width: "260px",
          height: "260px",
          background: "#1A1A1A",
          border: "2px solid #E10600",
          borderRadius: "10px",
          padding: "15px",
          boxSizing: "border-box",
          boxShadow: "0 0 10px rgba(225,6,0,0.4)",
          overflow: "auto",
        }}
      >
        <h3
          style={{
            color: "#E10600",
            margin: "0 0 10px",
            fontSize: "18px",
          }}
        >
          {race.raceName}
        </h3>

        <p style={{ margin: "5px 0", fontSize: "13px" }}>
          <b>Circuit:</b> {race.Circuit.circuitName}
        </p>

        <p style={{ margin: "5px 0", fontSize: "13px" }}>
          <b>🏁 Date:</b> {race.date}
        </p>

        <p style={{ margin: "5px 0", fontSize: "13px" }}>
          <b>⏰ Time:</b> {race.time}
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #E10600",
            margin: "10px 0",
          }}
        />

        <p style={{ margin: "4px 0", fontSize: "12px" }}>
          <b>FP1:</b> {race.FirstPractice?.time}
        </p>

        <p style={{ margin: "4px 0", fontSize: "12px" }}>
          <b>FP2:</b> {race.SecondPractice?.time}
        </p>

        <p style={{ margin: "4px 0", fontSize: "12px" }}>
          <b>FP3:</b> {race.ThirdPractice?.time}
        </p>

        <p style={{ margin: "4px 0", fontSize: "12px", color: "#E10600" }}>
          <b>Qualifying</b>
        </p>

        <p style={{ margin: "2px 0", fontSize: "12px" }}>
          {race.Qualifying?.date}
        </p>

        <p style={{ margin: "2px 0", fontSize: "12px" }}>
          {race.Qualifying?.time}
        </p>
      </div>
    ))}
  </div>
</div>  );
};

export default UpcomingRace;