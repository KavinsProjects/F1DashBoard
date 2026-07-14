import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CurrentsDriver = () => {
    const [data, setData ]=useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const {data :response } = await axios.get("https://api.jolpi.ca/ergast/f1/current/");

                setData(response);
                console.log(response);
                
            } catch (error) {
                console.error("Soemthing Went Worng while fetching api")
            }
        }
    },[])
  return (

    <div>

    </div>
  )
}

export default CurrentsDriver