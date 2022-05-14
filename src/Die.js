import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div onClick={props.holdDice} className="die" style={styles}>
      <h1>{props.number}</h1>
    </div>
  );
};

export default Die;
