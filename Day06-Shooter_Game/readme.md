# Raven Hunter (JavaScript + Canvas)

A lightweight 2D shooting game built using vanilla JavaScript and HTML5 Canvas. Ravens fly across the screen at random speeds and directions — the player must click them to score points before they escape. Includes particle trail effects, explosion animations, and a unique color-based hit detection system using a secondary canvas.

---

## What I Learned

- Layering multiple canvases for hit detection and rendering separation
- Creating sprite-based object-oriented animations
- Managing particles and explosions using object pools and animation frames
- Using `ctx.globalAlpha` to implement fading visual effects
- Collision detection via pixel color sampling

---

## Features

- 🎯 **Randomized Raven Behaviors** — Different sizes, speeds, and directions per raven
- 🎨 **Color-Based Collision Detection** — Efficient and scalable without bounding boxes
- 💨 **Particle Trails** — Some ravens leave behind animated trails
- 💥 **Explosion Animations** — With synced sound effects
- 📈 **Score Tracking & Game Over State**

---

## Preview

To run the game:

1. Clone or download the repository
2. Open `index.html` in your browser
3. Click on ravens to shoot them before they escape
4. Watch for particle trails and explosions
5. Game ends when a raven leaves the screen

---

## Assets

- `./assets/raven.png` – Raven sprite sheet
- `./assets/boom.png` – Explosion sprite sheet
- `./assets/boom.wav` – Explosion sound effect

---

## Credit

Based on tutorials by [Franks Laboratory](https://www.youtube.com/c/Frankslaboratory).

---

## License

This project is for educational purposes. Feel free to fork and customize.
