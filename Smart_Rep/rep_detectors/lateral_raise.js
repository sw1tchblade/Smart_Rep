// Lateral Raise Rep Counter
let pollingInterval = 40;
let thresholdUp = 0.6;
let thresholdDown = 0.2;
let minInterval = 600;
let repCount = 0, inRaise = false, lastRepTime = 0;

function drawStatus() {
  g.clearRect(0, 40, 240, 120);
  g.setFont("6x8", 3);
  g.drawString("Reps: " + repCount, 60, 80);
}

setInterval(() => {
  let a = Bangle.getAccel();
  let t = Date.now();
  if (a.y > thresholdUp && !inRaise) inRaise = true;
  else if (a.y < thresholdDown && inRaise && t - lastRepTime > minInterval) {
    repCount++; inRaise = false; lastRepTime = t;
    Bangle.buzz(); drawStatus();
  }
}, pollingInterval);

g.clear(); g.setFont("6x8", 2); g.drawString("Lateral Raise Tracker", 10, 10); drawStatus();
