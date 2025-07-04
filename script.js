//Esto permite que el header cambie de color al hacer scroll
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if(window.scrollY > 190){
        header.classList.add("fijo")
    }else{
        header.classList.remove("fijo")
    }
})

//Calculadora
let sectionCalculadora = document.getElementById("section6")
let barra = document.getElementById("barra")
let enviar = document.getElementById("enviar")
let interno1 = document.querySelector("#interno1")
let interno2 = document.querySelector("#interno2")
let textoGrafico1 = document.querySelector("#textoGrafico1")
let textoGrafico2 = document.querySelector("#textoGrafico2")
let figure = sectionCalculadora.querySelector("figure")

enviar.addEventListener("click", () => {
    let operacion = ((100*60)/parseFloat(barra.value)).toFixed(2)
    textoGrafico1.textContent = "Porcentaje de energía renobable: " + operacion + "%"
    textoGrafico2.textContent = "Porcentaje de energía no renobable: " + (100 - operacion) + "%"
    barra.value = ""
    figure.style.display = "flex"
    interno1.style.height = operacion + "%"
    interno2.style.height = (100 - operacion) + "%"
})

//menu dezplegable
let ocultar = document.getElementById("ocultar")
let mostrar = document.getElementById("mostrar")
let nav = document.querySelector("nav")

ocultar.onclick = () => {
    nav.style.display = "none"
}

mostrar.onclick = () => {
    nav.style.display = "flex"
}