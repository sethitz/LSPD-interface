var desplegar = document.getElementById("desplegable"),
    mainbox = document.getElementById("main-box"),
    secbox = document.getElementById("sec-box"),
    back = document.getElementById("back")

    function cambiar(){
        mainbox.classList.remove("main-box-active")
        mainbox.classList.add("main-box")
        secbox.classList.remove("sec-box")
        secbox.classList.add("sec-box-active")
    }

    function backfun(){
        mainbox.classList.remove("main-box") 
        mainbox.classList.add("main-box-active")
        secbox.classList.remove("sec-box-active")
        secbox.classList.add("sec-box")
    }

    back.addEventListener("click",backfun,true)
    desplegar.addEventListener("click",cambiar,true)