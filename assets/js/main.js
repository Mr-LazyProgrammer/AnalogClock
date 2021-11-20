let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let d = new Date()
function clock(){
    let d = new Date()
    sec.style.transform =  `rotateZ(${d.getSeconds()*6 + 90}deg)`
    min.style.transform =  `rotateZ(${d.getMinutes()*6 + 90}deg)`
    hour.style.transform =  `rotateZ(${d.getHours()*30 + (d.getMinutes())*0.5 + 90}deg)`
}
setInterval(clock, 1000)