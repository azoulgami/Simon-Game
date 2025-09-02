# Simon Game (Vanilla JavaScript)

A classic memory game clone built using **HTML**, **CSS**, and **JavaScript**. This browser-based version of *Simon* challenges players to recall and reproduce an increasingly long sequence of colors and sounds.

**Play the Demo:** https://azoulgami.github.io/Simon-Game/

---

## How to Play
1. Press any key to start.
2. Watch the sequence of highlighted colored buttons with accompanying sounds.
3. Repeat the sequence by clicking the buttons in the exact order.
4. The sequence grows longer with each correct input—can you keep up?

---

## Features
- Minimalist, distraction-free interface.
- Four colorful, clickable buttons with visual and audio feedback.
- Progressive difficulty: sequences get longer as you succeed.
- Mobile-friendly layout.

---

## Tech Stack
- HTML5 – Structure of the game interface.
- CSS3 – Styling, layout, and responsiveness.
- Vanilla JavaScript – Core game logic and user interactions.
- Web Audio – Sound effects for feedback.

---

## Project Structure
Simon-Game/
├── index.html       # Main game page
├── styles.css       # Visual styling and animations
├── script.js        # Game logic and event handling
└── sounds/          # Audio files for button clicks and game over

---

## Getting Started Locally

1) Clone the repository  
   git clone https://github.com/azoulgami/Simon-Game.git  
   cd Simon-Game

2) Open index.html directly in your browser, or run a local server (recommended)  
   npx http-server  
   python -m http.server

3) Visit the local URL  
   http://localhost:8080  (or the URL printed by your server)

---

## Future Enhancements
- Score tracking and high score persistence (localStorage).
- Difficulty settings (speed, number of colors).
- Accessibility improvements (ARIA roles, keyboard-only play, reduced motion).
- Animations and sound volume controls.

---

## About
This Simon Game was created as a portfolio/demo project to showcase front-end development skills using pure JavaScript, along with clean UI design and responsive interactivity.
