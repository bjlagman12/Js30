console.log('initial test')

let playSound = (e) => {
console.log(e.keyCode)  
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio.currentTime = 0
  audio.play()
  // console.log(document.querySelector('audio[data-key="65"]').play())
}

window.addEventListener('keydown', playSound)
// document.getElementsByClassName('sound')[0].addEventListener('click', playSound)
