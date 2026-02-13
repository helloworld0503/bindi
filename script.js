// ❤️ PERSONALIZE HERE
const NAME = "Meri Bindi";
const MESSAGE = `To ${NAME} ❤️
I love you so much.
You are my life.
Happy Valentine’s Day 💖`;

const textEl = document.getElementById("typewriter");
let index = 0;

// ⌨️ Typewriter
function typeText() {
  if (index < MESSAGE.length) {
    textEl.innerHTML += MESSAGE.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}
typeText();

// 🎵 Music unlock
document.body.addEventListener("click", () => {
  document.getElementById("bgm").play().catch(() => {});
}, { once: true });

// 💥 Hearts
function burst(e) {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["❤️","💖","💘","💕"][Math.floor(Math.random()*4)];
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);
  }
}

// 💌 YES
function acceptLove(e) {
  e.stopPropagation();

  // Text change
  textEl.innerHTML = "YAY!! 💖💖💖<br>Forever & Always 🌸";

  // Background morph 🌌➡️💖
  document.getElementById("sky").style.opacity = "0";
  document.getElementById("glow").style.opacity = "1";

  // Image swap
  const box = document.getElementById("coupleBox");
  box.innerHTML = `<img src="couple.png" class="couple">`;

  // Hearts from center
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      burst({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2
      });
    }, i * 30);
  }

  document.getElementById("valBtn").remove();
}

// Click anywhere for hearts
document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) burst(e);
});
