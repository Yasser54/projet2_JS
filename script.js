function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var h = 0;
var m = 0;
var s = 0;

var start;

function mystart() {
    start = setInterval(seconde, 1000);
    document.getElementById("start").setAttribute("disabled", "disabled");

}

function myclick() {
    document.getElementById("reset").style.position = "relative";

}

function mydeclick() {
    document.getElementById("reset").style.position = "";
}

function myclick2() {
    document.getElementById("startStop").style.top = "146px";
    document.getElementById("startStop").style.left = "185px";
}

function mydeclick2() {

    document.getElementById("startStop").style.top = "140px";
    document.getElementById("startStop").style.left = "190px";

}

function mystop() {
    clearInterval(start);
    document.getElementById("start").removeAttribute("disabled");

}

function myreset() {
    s = 0;
    m = 0;
    h = 0;
    document.getElementById("demo").innerHTML = addZero(h) + ":" + addZero(m) + ":" + addZero(s);

}

function seconde() {
    if (s <= 59) {
        s++;
    }
    if (s > 59) {
        s = 0, m++;
    }
    if (m > 59) {
        m = 0, h++;
    }
    if (h > 23) {
        h = 0;
    }

    document.getElementById("demo").innerHTML = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
}