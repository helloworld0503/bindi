const NAME = "YOUR NAME";
const MESSAGE = `To ${NAME} ❤️
I love you so much.
You are my life.
Happy Valentine’s Day 💖`;

const textEl = document.getElementById("typewriter");
const music = document.getElementById("bgm");
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

// 🎵 Start music
function startMusic() {
  music.play();
  const overlay = document.getElementById("musicOverlay");
  overlay.style.opacity = "0";
  setTimeout(() => overlay.remove(), 1000);
}

// 💥 Hearts
function burst(e) {
  for (let i = 0; i < 10; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = ["❤️","💖","💘","💕"][Math.floor(Math.random()*4)];
    h.style.left = e.clientX + "px";
    h.style.top = e.clientY + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1400);
  }
}

// 💌 YES
function acceptLove(e) {
  e.stopPropagation();

  textEl.innerHTML = "YAY!! 💖💖💖<br>Forever & Always 🌸";

  document.getElementById("sky").style.opacity = "0";
  document.getElementById("glow").style.opacity = "1";

  document.getElementById("coupleBox").innerHTML =
    `<img src="couple.png" class="couple">`;

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      burst({ clientX: innerWidth/2, clientY: innerHeight/2 });
    }, i * 30);
  }

  document.getElementById("valBtn").remove();
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("button") && !e.target.closest("#musicOverlay")) {
    burst(e);
  }
});
