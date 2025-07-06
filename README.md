# SmartRep: A Wireless Fitness Coach for Bangle.js 1

SmartRep is a modular smartwatch application developed for the Bangle.js 1. It tracks strength exercises in real-time using motion data and provides immediate visual and haptic feedback. Designed for hands-free operation, SmartRep helps users focus on form and reps without needing a phone or screen interaction.

---

## 🎯 Project Overview

This app was developed as part of an academic project at Universität Siegen. The goal was to build a lightweight, fully on-watch fitness tracker using the Bangle.js 1. It is capable of detecting and counting repetitions for multiple strength-based exercises using built-in accelerometer data and logic derived from lightweight machine learning models.

---

## 💪 Supported Exercises

- Bench Press  
- Bicep Curls  
- Cable Rows  
- Lateral Raise  
- Push-Up  
- Shoulder Press  
- Triceps Pushdown  
- Squats

---

## 🚀 Features

- Clean green-and-black UI theme  
- Scrollable exercise list (BTN1 & BTN3)  
- Repetition target selection  
- Circular animated progress display  
- Vibration and screen flash after set completion  
- Modular architecture for easy extension  
- Works fully offline on Bangle.js 1

---

## 🧠 How Rep Detection Works

1. **Data Collection:** Raw accelerometer data (X, Y, Z) was collected for each exercise.
2. **ML Model Design:** ML classifiers (Decision Tree, Random Forest, KNN) were tested on motion features.
3. **Threshold Conversion:** Models were converted into rule-based motion thresholds.
4. **Real-Time Execution:** The final rep detection logic is optimized to run live on the watch.

---

## 📂 File Structure

```
SmartRep/
├── smartrep.app.js         # UI and navigation controller
├── logic/                  # Individual exercise detection files
│   ├── bench_press.js
│   ├── bicep_curls.js
│   ├── cable_rows.js
│   ├── lateral_raise.js
│   ├── pushup.js
│   ├── shoulder_press.js
│   ├── squats.js
│   └── triceps_pushdown.js
├── srlogo.png              # App logo (inspired by Omnitrix)
├── metadata.json           # App descriptor for Bangle.js App Loader
```

---

## 📲 How to Install

1. Go to the [Bangle.js App Loader](https://banglejs.com/apps/#upload).
2. Select **"Upload App"**.
3. Upload the following:
   - `smartrep.app.js`
   - `metadata.json`
   - `srlogo.png`
   - The entire `logic/` folder
4. Flash the app to your **Bangle.js 1** watch.
5. Press BTN1 and BTN3 to scroll. BTN2 to select and start.

---

## 👨‍💻 Authors

- Lakhan Singh 
- Aakash Deshmukh 
- Mohit Bishnoi  

---

Note: Built for academic use and personal fitness tracking.

---

**Note:** SmartRep runs entirely on-watch. No Bluetooth, phone, or server is needed during exercise.
