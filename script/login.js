let btn = document.getElementById("sign")
btn.addEventListener('click',function (params) {
    location.href = "signup.html"
    
})
let input1 = document.getElementById("input1")
input1.addEventListener("click", function (params) {
    let cir1 = document.getElementById("cir1")
    cir1.classList = "cir1"
    let cir2 = document.getElementById("cir2")
    cir2.classList = "cir2"
})
let input2 = document.getElementById("input2")
input2.addEventListener("click", function (params) {
    let cir1 = document.getElementById("cir1")
    cir1.classList = "cir1"
    let cir2 = document.getElementById("cir2")
    cir2.classList = "cir2"
})
let pass = document.getElementById('input2')
let show = document.getElementById('show' )
show.addEventListener('click',function () {
    if (pass.type == "password") {
        pass.type = "text"
        show.style.display = "none"
        hide1.style.display = "flex"
    }
    else{
        pass.type = "password"
        show.style.display = "flex"
    }
})
let hide1 = document.getElementById('hide')
hide1.addEventListener('click', hide)
function hide(params) {
    if (pass.type == "text") {
        pass.type = "password"
        hide1.style.display = "none"
        show.style.display = "flex"

    }
    else{
        pass.type = "text"
        hide1.style.display = "flex"


    }
}