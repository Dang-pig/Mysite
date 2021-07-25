let data = []
let get = ""
let USER = ""
loadData()
function checknone() {
    let a = document.getElementById("name").value
    let b = document.getElementById("mail").value
    let c = document.getElementById("pass").value
    let d = document.getElementById("pass2").value
    if (a != "" && b != "" && c != "" && d != "") {
        if (c == d) {
            saveData(a, b, c, d)
        }
        else {
            document.getElementById("check").innerText = "Type again, it's not true!"
        }
    }
    if (a == "") {
        document.getElementById("name").style = "border-color: red; "
    }
    else {
        document.getElementById("name").style = "border-color: dodgerblue; "
    }
    if (b == "") {
        document.getElementById("mail").style = "border-color: red; "
    }
    else {
        document.getElementById("mail").style = "border-color: dodgerblue; "
    }
    if (c == "") {
        document.getElementById("pass").style = "border-color: red; "
    }
    else {
        document.getElementById("pass").style = "border-color: dodgerblue; "
    }
    if (d == "") {
        document.getElementById("pass2").style = "border-color: red; "
    }
    else {
        document.getElementById("pass2").style = "border-color: dodgerblue; "
    }
}
function cancel() {
    window.location.href = "index.html"
}
function nored() {
    document.getElementById("name").style = "border-color: dodgerblue; "
    document.getElementById("mail").style = "border-color: dodgerblue; "
    document.getElementById("pass").style = "border-color: dodgerblue; "
    document.getElementById("pass2").style = "border-color: dodgerblue; "
}
function nored2() {
    document.getElementById("maillog").style = "border-color: dodgerblue; "
    document.getElementById("passlog").style = "border-color: dodgerblue; "
}
function saveData(a, b, c, d) {
    data.unshift([a, b, c, d])
    window.localStorage.setItem('data', JSON.stringify(data))
    window.location.href = "login.html"
}
function loadData() {
    get = window.localStorage.getItem('data')
    data = JSON.parse(get)
    return data
}
function login() {
    let mail = document.getElementById("maillog").value
    let pass = document.getElementById("passlog").value
    for (i = 0; i < data.length; i++) {
        if (mail == data[i][1] && pass == data[i][3]) {
            USER = data[i][0]
            window.localStorage.setItem('curuser', JSON.stringify(USER))
            window.location.href = "index.html"
        }
    }
    document.getElementById("haveornot").innerText = "That account does not exist or the password is incorrect!"
}