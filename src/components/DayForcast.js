import React from "react";

const DayForcast = ({ timeStamp, dailyHigh, dailyLow, weather }) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = week[new Date(timeStamp * 1000).getDay()];

  return (
    <article className="single-day">
      <h1 className="muted-text">{dayOfWeek}</h1>
      <img src={`http://openweathermap.org/img/wn/${weather}@2x.png`} alt="" />
      <div className="temps">
        <h3>{Math.floor(dailyHigh)}&deg;</h3>
        <h3 className="muted-text">{Math.floor(dailyLow)}&deg;</h3>
      </div>
    </article>
  );
};

export default DayForcast;
