console.log("initial test");

let removeTransition = (e) => {
  e.target.classList.remove('play')
}

let playSound = e => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!audio) return;
  
  key.classList.add('play')
  audio.currentTime = 0;
  audio.play();
};

  let keys = Array.from(document.querySelectorAll('.key'))
  for (var i = 0; i < keys.length; i++) {
    var each = keys[i]
    each.addEventListener('transitionend', removeTransition)
  }
window.addEventListener("keydown", playSound);
