import React from "react";
import DayForcast from "./DayForcast";

const FiveDayForcast = ({ forcast }) => {
  return (
    <section className="five-day">
      {forcast.map((day, index) => {
        //only get today and next 4 days
        if (index > 4) {
          return null;
        }
        const { timeStamp, dailyHigh, dailyLow, weatherIcon } = day;
        return (
          <DayForcast
            key={timeStamp}
            timeStamp={timeStamp}
            dailyHigh={dailyHigh}
            dailyLow={dailyLow}
            weatherIcon={weatherIcon}
          />
        );
      })}
    </section>
  );
};

export default FiveDayForcast;
