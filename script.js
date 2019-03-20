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
