import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ConstructorStandings = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
              const {data : response} = await axios.get("https://api.jolpi.ca/ergast/f1/current/constructorStandings/?format=json"); 
                setData(response);
                console.log(response);
            } catch (error) {
                console.log("Worng", error);
            }
        }
        fetchData()
    },[]);

  return (
    <div>
        <div>
            <h3 style={{color : "white"}}>Constructor-Standings</h3>
            {data?.MRData?.StandingsTable?.StandingsLists?.map((standis)=>
            <div key={StandingsLists.season}>
            <h3>season : {standis.season}</h3>
            </div>
            )}
        </div>
    </div>
  )
}

export default ConstructorStandings