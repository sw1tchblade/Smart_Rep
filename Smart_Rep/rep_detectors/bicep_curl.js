// Bicep Curl Rep Counter
let pollingInterval = 40;
let thresholdUp = 0.85;
let thresholdDown = 0.35;
let minInterval = 500;
let repCount = 0, inCurl = false, lastRepTime = 0;

function drawStatus() {
  g.clearRect(0, 40, 240, 120);
  g.setFont("6x8", 3);
  g.drawString("Reps: " + repCount, 60, 80);
}

setInterval(() => {
  let a = Bangle.getAccel();
  let t = Date.now();
  if (a.y > thresholdUp && !inCurl) inCurl = true;
  else if (a.y < thresholdDown && inCurl && t - lastRepTime > minInterval) {
    repCount++; inCurl = false; lastRepTime = t;
    Bangle.buzz(); drawStatus();
  }
}, pollingInterval);

g.clear(); g.setFont("6x8", 2); g.drawString("Bicep Curl Tracker", 10, 10); drawStatus();
