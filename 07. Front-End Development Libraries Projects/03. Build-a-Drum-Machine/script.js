const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

const sounds = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick n' Hat",
  X: "Kick",
  C: "Closed HH"
};

function playPad(pad) {
  // The pad's text is now ONLY the keyboard letter.
  const key = pad.textContent.trim();

  const audio = pad.querySelector(".clip");

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  // Show the descriptive sound name.
  display.textContent = sounds[key];

  // Visual feedback.
  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 120);
}


// Mouse / touch clicks
pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    playPad(pad);
  });
});


// Keyboard controls
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const pad = [...pads].find((pad) => {
    return pad.textContent.trim() === key;
  });

  if (pad) {
    playPad(pad);
  }
});