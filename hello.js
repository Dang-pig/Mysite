hello()
function hello() {
    let whatever = window.localStorage.getItem('curuser')
    let USER = JSON.parse(whatever)
    if (USER != null) {
        document.getElementById("hello").innerText = "Hello " + USER + ". You're cool!"
        document.getElementById("sign").style.display = "none"
        document.getElementById("sign2").style.display = "none"
        document.getElementById("out").style.display = "block"
        return USER;
    }
    else {
        window.location.href = "index.html"
        document.getElementById("sign").style.display = "block"
        document.getElementById("sign2").style.display = "block"
    }
}
function out() {
    document.getElementById("out").style.display = "none"
    document.getElementById("sign").style.display = "block"
    document.getElementById("sign2").style.display = "block"
    document.getElementById("sites").style.display = "none"
    document.getElementById("hello").innerText = ""
    window.localStorage.setItem('curuser', null)
    window.location.href = "index.html"
}