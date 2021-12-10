import React, { useState, useEffect } from "react";
import FiveDayForcast from "./components/FiveDayForcast";
import "./App.css";

const API_KEY = "1c1db8d090d9ca476798758a61fc7f7f";
const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=39.099728&lon=-94.578568&exclude=current,hourly,minutely,alerts&units=imperial&appid=${API_KEY}`;

function App() {
  const [forcast, setForcast] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      const newForcast = data.daily.map((day) => {
        const {
          dt,
          temp: { min, max },
          weather: [{ icon }],
        } = day;
        return {
          timeStamp: dt,
          dailyHigh: max,
          dailyLow: min,
          weatherIcon: icon,
        };
      });
      setForcast(newForcast);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="forcast">
      <FiveDayForcast forcast={forcast} />
    </main>
  );
}

export default App;
