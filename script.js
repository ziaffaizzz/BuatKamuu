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
