// HIDE PRELOADER AFTER 2s
setTimeout(() => {
  document.getElementById('preloader').classList.add('hidden');
  document.getElementById('hero').classList.remove('hidden');
}, 2000);

// TYPEWRITER ANIMATION (Fallback)
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  typewriter.style.animation = 'typing 3s steps(20) infinite';
}
