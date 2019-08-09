console.log('initial test')

let playSound = (e) => {
console.log(e.keyCode)  
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio.currentTime = 0
  audio.play()

}

window.addEventListener('keydown', playSound)

