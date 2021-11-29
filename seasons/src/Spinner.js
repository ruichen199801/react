import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// If we do not put a message, we display a default prop
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;