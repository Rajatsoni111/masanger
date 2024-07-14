let click = true
        let btn = document.getElementById("login")
        btn.addEventListener('click', function (params) {
            location.href = "login.html"

        })
        function ani(params) {
            let cir1 = document.getElementById("cir1")
            cir1.classList = "cir1"
            let cir2 = document.getElementById("cir2")
            cir2.classList = "cir2"
        }
        let input1 = document.getElementById("input1")
        input1.addEventListener("click", function (params) {
            ani()
        })
        let input2 = document.getElementById("input2")
        input2.addEventListener("click", function (params) {
            ani()
        })
        let input3 = document.getElementById("input3")
        input3.addEventListener("click", function (params) {
            ani()
        })
        let input4 = document.getElementById("input4")
        input4.addEventListener("click", function (params) {
            ani()
        })