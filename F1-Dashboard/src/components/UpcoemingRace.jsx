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
    <div style={{ color : "white"}}>
      <h2 >Upcomeing Race </h2>

      {data?.MRData?.RaceTable?.Races?.map((race) => (
        <div key={race.round}>
          <h3>{race.raceName}</h3>
          <p>Circuit: {race.Circuit.circuitName}</p>
          <p>Date: 🏁 Race{race.date}</p>
          <p>Time: {race.time}</p>
          <p>First Practices : {race.FirstPractice.time}</p>
          <p>Second Practices : {race.SecondPractice.time}</p>
          <p>ThirdPractice :{race.ThirdPractice.time}</p>
          <p>Qualifying : 
            <p>Date : {race.Qualifying.date}</p>
            <p>{race.Qualifying.time}</p>
          </p>
          <hr />
        </div>
      ))}
      </div>
  );
};

export default UpcomingRace;