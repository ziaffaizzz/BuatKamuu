function showLove() {
  const loveText = document.getElementById('loveText');
  loveText.style.display = 'block';
}
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}
// Fungsi untuk munculkan hati jatuh
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Jalankan setiap 300ms
setInterval(createHeart, 300);

// Fungsi untuk teks cinta
function showLove() {
  const loveText = document.getElementById('loveText');
  loveText.style.display = 'block';
}
const playlist = ["about.mp3", "you.mp3", "hivii.mp3", "lany.mp3"];
let index = 0;
const audio = document.getElementById("bgMusic");
function playMusic() {
  audio.src = playlist[index];
  audio.play();
}

audio.addEventListener("ended", () => {
  index++;
  if (index >= playlist.length) index = 0; // Ulang dari awal
  audio.src = playlist[index];
  audio.play();
});
