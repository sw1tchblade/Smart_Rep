// Squat Rep Counter
let pollingInterval = 40;
let thresholdDown = -1.3;
let thresholdUp = -0.5;
let minInterval = 700;
let repCount = 0, inSquat = false, lastRepTime = 0;

function drawStatus() {
  g.clearRect(0, 40, 240, 120);
  g.setFont("6x8", 3);
  g.drawString("Reps: " + repCount, 60, 80);
}

setInterval(() => {
  let a = Bangle.getAccel();
  let t = Date.now();
  if (a.z < thresholdDown && !inSquat) inSquat = true;
  else if (a.z > thresholdUp && inSquat && t - lastRepTime > minInterval) {
    repCount++; inSquat = false; lastRepTime = t;
    Bangle.buzz(); drawStatus();
  }
}, pollingInterval);

g.clear(); g.setFont("6x8", 2); g.drawString("Squat Tracker", 10, 10); drawStatus();
