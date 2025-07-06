// 15-second Accelerometer Logger for Bangle.js
let data = [];
let duration = 15000; // 15 seconds
let pollingRate = 40; // ms (~25Hz)
let isLogging = false;

function startLogging() {
  if (isLogging) return;
  isLogging = true;
  data = [];

  g.clear();
  g.setFont("6x8", 2);
  g.drawString("Logging for 15 sec...", 10, 40);

  Bangle.setPollInterval(pollingRate);
  Bangle.on('accel', logSample);

  setTimeout(stopLogging, duration);
}

function logSample(a) {
  data.push([Date.now(), a.x.toFixed(2), a.y.toFixed(2), a.z.toFixed(2)].join(","));
}

function stopLogging() {
  isLogging = false;
  Bangle.removeListener('accel', logSample);
  g.clear();
  g.setFont("6x8", 2);
  g.drawString("Logging complete.", 10, 40);
  g.drawString("Check IDE console.", 10, 70);

  // Print CSV to console
  console.log("timestamp,x,y,z");
  data.forEach(line => console.log(line));
}

setWatch(startLogging, BTN2, { repeat: false, edge: "rising" });

g.clear();
g.setFont("6x8", 2);
g.drawString("Press BTN2 to log", 10, 50);
