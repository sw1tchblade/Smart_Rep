let inDown = false;
let lastTime = 0;

function detectBenchPress(a, now, reps, targetReps) {
  if (reps >= targetReps) return { reps, completed: true };

  if (!inDown && a.z > -0.83) {
    inDown = true;
  }
  if (inDown && a.z < -0.93 && (now - lastTime > 500)) {
    inDown = false;
    lastTime = now;
    reps++;
  }

  return {
    reps,
    completed: reps >= targetReps
  };
}

exports.detect = detectBenchPress;
