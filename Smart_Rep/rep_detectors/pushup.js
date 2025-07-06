// Push-Up Rep Counter
let pollingInterval = 40;
let thresholdDown = 0.2;
let thresholdUp = 0.65;
let minInterval = 800;
let repCount = 0, inPush = false, lastRepTime = 0;

function drawStatus() {
  g.clearRect(0, 40, 240, 120);
  g.setFont("6x8", 3);
  g.drawString("Reps: " + repCount, 60, 80);
}

setInterval(() => {
  let a = Bangle.getAccel();
  let t = Date.now();
  if (a.y < thresholdDown && !inPush) inPush = true;
  else if (a.y > thresholdUp && inPush && t - lastRepTime > minInterval) {
    repCount++; inPush = false; lastRepTime = t;
    Bangle.buzz(); drawStatus();
  }
}, pollingInterval);

g.clear(); g.setFont("6x8", 2); g.drawString("Push-Up Tracker", 10, 10); drawStatus();
