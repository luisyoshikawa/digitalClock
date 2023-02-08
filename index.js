const horaElement = document.getElementById("hora");
const minutoElement = document.getElementById("minuto");
const segundoElement = document.getElementById("segundo");
const ampmElement = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h-=12;
        ampm="PM";
    }

    horaElement.innerHTML = h;
    minutoElement.innerHTML = m;
    segundoElement.innerHTML = s;
    ampmElement.innerHTML = ampm;

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    setTimeout(() => {
       updateClock();
    }, 1000);
}

updateClock();