// SmartRep UI Main Menu
let exercises = ["Bicep Curl", "Lateral Raise", "Shoulder Press", "Squats", "Push-Ups"];
let selected = 0;

function drawMenu() {
  g.clear(); g.setFont("6x8", 2);
  g.setColor(0,255,0); g.drawString("SmartRep", 80, 10);
  g.setColor(0,200,255); g.drawString("Select Exercise:", 20, 40);
  exercises.forEach((e, i) => {
    g.setColor(i === selected ? 255 : 255, i === selected ? 255 : 255, i === selected ? 0 : 255);
    g.drawString(e, 40, 70 + i * 20);
  });
}

setWatch(() => { selected = (selected + 1) % exercises.length; drawMenu(); }, BTN1, { repeat: true });
setWatch(() => { selected = (selected - 1 + exercises.length) % exercises.length; drawMenu(); }, BTN3, { repeat: true });
setWatch(() => {
  load(`rep_detectors/${exercises[selected].toLowerCase().replace(/ /g, "_")}.js`);
}, BTN2, { repeat: true });

drawMenu();
