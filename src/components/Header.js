import React from "react";

function Header() {
  const date = new Date();
  const hours = date.getHours();
  let greeting;
  
  const styles = {
    fontSize: "40px",
    wordSpacing: "5px",
    letterSpacing: "0.25px",
    backgroundColor: "#FFFF66",
    padding: "20px",
    textAlign: "center"
  }

  if (hours >= 0 && hours < 6){
    greeting = "Night";
    styles.color = "#990099";
  } 
  else if (hours >= 6 && hours <12 ){
    greeting = "Morning";
    styles.color = "#990000"
  } 
  else if (hours >= 12 && hours <18 ) {
    greeting = "Afternoon";
    styles.color = "#000099"
  }
  else {
    greeting = "Evening";
    styles.color = "#006600"
  }

  return (
    <div>
      <h1 style={styles}>Good {`${greeting}!`}</h1>
      <h3 className="taskList">Your Checklist:</h3>
    </div>
  );
}

export default Header;