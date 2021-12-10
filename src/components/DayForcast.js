import React from "react";

const DayForcast = ({ timeStamp, dailyHigh, dailyLow, weatherIcon }) => {
  // array for the day names
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // multiply the UTC timestamp by 1000 to get miliseconds and then get the day of the date object
  const dayOfWeek = week[new Date(timeStamp * 1000).getDay()];

  return (
    <article className="single-day">
      <h1 className="muted-text">{dayOfWeek}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="weather icon"
      />
      <div className="temps">
        <h3>{Math.floor(dailyHigh)}&deg;</h3>
        <h3 className="muted-text">{Math.floor(dailyLow)}&deg;</h3>
      </div>
    </article>
  );
};

export default DayForcast;
