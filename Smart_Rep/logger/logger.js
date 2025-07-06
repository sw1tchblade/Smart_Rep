// Simple Accelerometer Logger for Bangle.js
let isLogging = false;
let data = [];

function toggleLogging() {
  if (!isLogging) {
    isLogging = true;
    data = [];
    Bangle.setPollInterval(40);
    Bangle.on('accel', logData);
    g.clear(); g.drawString("Logging...", 10, 10);
  } else {
    isLogging = false;
    Bangle.removeListener('accel', logData);
    require("Storage").write("exercise_log.csv", data.join("\n"));
    g.clear(); g.drawString("Saved.", 10, 10);
  }
}

function logData(d) {
  data.push([Date.now(), d.x.toFixed(2), d.y.toFixed(2), d.z.toFixed(2)].join(","));
}

setWatch(toggleLogging, BTN2, { repeat: true, edge: "rising" });
g.clear(); g.setFont("6x8", 2); g.drawString("Press BTN2 to start/stop logging", 10, 50);
