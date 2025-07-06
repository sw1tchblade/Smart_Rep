// Shoulder Press Rep Counter
let pollingInterval = 40;
let thresholdUp = 0.6;
let thresholdDown = 0.2;
let minInterval = 600;
let repCount = 0, inPress = false, lastRepTime = 0;

function drawStatus() {
  g.clearRect(0, 40, 240, 120);
  g.setFont("6x8", 3);
  g.drawString("Reps: " + repCount, 60, 80);
}

setInterval(() => {
  let a = Bangle.getAccel();
  let t = Date.now();
  if (a.z > thresholdUp && !inPress) inPress = true;
  else if (a.z < thresholdDown && inPress && t - lastRepTime > minInterval) {
    repCount++; inPress = false; lastRepTime = t;
    Bangle.buzz(); drawStatus();
  }
}, pollingInterval);

g.clear(); g.setFont("6x8", 2); g.drawString("Shoulder Press Tracker", 10, 10); drawStatus();
