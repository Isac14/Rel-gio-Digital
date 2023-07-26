const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

function atualiza(){
    let date = new Date

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    addZero(hour, minute, second)
}

function addZero(hour, minute, second){
    // horas
    if(hour < 10){
        hours.innerHTML = '0' + hour
    }
    if(hour >= 10){
        hours.innerHTML = hour
    }
    
    // Minutos
    if(minute < 10){
        minutes.innerHTML =  0 + minute
    }
    if(minute >= 10){
        minutes.innerHTML = minute
    }

    // Segundos
    if(second < 10){
        seconds.innerHTML = '0' + second
    }
    if(second >= 10){
        seconds.innerHTML = second
    }

    
    
    

}

setInterval(atualiza, 1000)