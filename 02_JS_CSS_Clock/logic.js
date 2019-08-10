let time = () => {
  
  const hourHand = document.querySelector('.hand-hour')
  const minHand = document.querySelector('.hand-min')
  const secHand = document.querySelector('.hand-sec')
  
  let time = new Date()
  
  let sec = time.getSeconds()
  let secDeg = (((sec / 60) * 360) + 90)
  
  secHand.style.transform = `rotate(${secDeg}deg)`
  
  let min = time.getMinutes();
  let minDeg = (((min / 60) * 360) + ((sec / 60) * 6)  + 90)
  
  minHand.style.transform = `rotate(${minDeg}deg)`
  
  let hour = time.getHours()
    if (hour > 12) {
      hour = hour - 12
    }
  let hourDeg = (((hour / 12) * 360) +((min / 60) * 30) + 90)   
  hourHand.style.transform = `rotate(${hourDeg}deg)`

}
setInterval(time, 1000);
