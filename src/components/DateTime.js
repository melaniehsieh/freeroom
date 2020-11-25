import React from "react";

const DateTime = () => {
  let current = new Date();
  const array = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = array[current.getDay() - 1];
  const date = current.getDate();
  const month = current.getMonth() + 1;
  const year = current.getFullYear();

  return (
    <div>
      <h3>
        Today: {day} {date}/{month}/{year}
      </h3>
    </div>
  );
};

export default DateTime;
