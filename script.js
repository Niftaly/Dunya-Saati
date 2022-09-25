time();
let set = setInterval(time,1000);

function time () {
    document.getElementById("saat").innerHTML = new Date().toLocaleTimeString();
}

function stop() {
    clearInterval(set);
}

function start() {
    set = setInterval(time,1000);
}