const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let date = new Date

let hour = date.getHours()
let minute = date.getHours()
let second = date.getSeconds()

hours.innerHTML = hour
minutes.innerHTML = minute
seconds.innerHTML = second