//NAV

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("#bottom").style.top = "63px";
    } else {
        document.querySelector("#bottom").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

//TEST

let cirkel = document.querySelector("#cirkel");
let tid = document.querySelector("#tid");
let text = document.querySelector("#testtext");
let timer = Math.floor(Math.random() * 10) + 1;

document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
    cirkel.addEventListener("click", wait);
}

function wait() {
    console.log("wait");

    cirkel.removeEventListener("click", wait);
    text.textContent = "VENT";

    timerFc();
}

function timerFc() {
    console.log(timer);
    if (timer > 0) {
        timer--;
        setTimeout(timerFc, 1000);
    } else {
        click();
    }
}

function click() {
    console.log("click");
    let starttime = Date.now();

    text.textContent = "";
    cirkel.style.backgroundColor = "#7fba27";

    cirkel.addEventListener("click", stop);


    function stop() {
        console.log("stop");

        cirkel.removeEventListener("click", stop);

        let goneby = Date.now() - starttime;

        cirkel.style.backgroundColor = "#eaeaea";

        text.textContent = "FLOT! Vil du prøve igen?";

        tid.textContent = "Din tid er " +
            goneby + " ms";

        text.addEventListener("click", restart);

    }
}

function restart() {
    text.removeEventListener("click", restart);
    location.reload();
}
