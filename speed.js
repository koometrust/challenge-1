function checkSpeed() {
    // Get the speed value from the input
    let speed = document.getElementById("speed").value;
    
    // Calculate the number of points
    let points = 0;
    if (speed > 70) {
      points = Math.floor((speed - 70) / 5);
    }
    
    // the results are displayed here
    if (points > 0 && points < 12) {
      document.getElementById("result").textContent = "Points: " + points;
    } else if (points >= 12) {
      document.getElementById("result").textContent = "License suspended";
    } else {
      document.getElementById("result").textContent = "OK";
    }
  }
  