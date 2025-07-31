
const playlist = ["about.mp3", "you.mp3", "hivii.mp3", "lany.mp3"];
let index = 0;

function playMusic() {
  const audio = document.getElementById("bgMusic");
  audio.src = playlist[index];
  audio.play();

  audio.onended = function () {
    index++;
    if (index < playlist.length) {
      audio.src = playlist[index];
      audio.play();
    }
    // tidak mengulang ke awal
  };
}

function showLove() {
  const loveText = document.getElementById("loveText");
  loveText.style.display = "block";
}

// Efek hati jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
