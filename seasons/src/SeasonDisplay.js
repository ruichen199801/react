import './SeasonDisplay.css'; // webpack grabs it and inserts into index.html
import React from 'react';

// Refactor the follwing code:
// const text = season === "winter" ? "Burr, it is chilly" : "Let&apos;s hit the beach";
// const icon = season === "winter" ? "snowflake" : "sun";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // destructuring such that we don't have to do summer.text
  const {text, iconName} = seasonConfig[season];
  return (
    // SeasonDisplay -> season-display
    <div className={`season-display ${season}`}> 
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;