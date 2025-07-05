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
    if(barra.value == ""){
        alert("error")
    }else{
        let operacion = ((100*60)/parseFloat(barra.value)).toFixed(2)
        textoGrafico1.textContent = "Porcentaje de energía renobable: " + operacion + "%"
        textoGrafico2.textContent = "Porcentaje de energía no renobable: " + (100 - operacion).toFixed(2) + "%"
        barra.value = ""
        figure.style.display = "flex"
        interno1.style.height = operacion + "%"
        interno2.style.height = (100 - operacion).toFixed(2) + "%"
    }
})

barra.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        enviar.click()
    }
})

//menu dezplegable
let mostrar = document.querySelector(".mostrar")
let nav = document.querySelector("nav")
let a = document.querySelectorAll("a")

a.forEach(a => {
    a.onclick = () => {
        nav.classList.toggle("activar")
        mostrar.classList.toggle("e")
    }    
});

mostrar.onclick = () => {
    nav.classList.toggle("activar")
    mostrar.classList.toggle("e")
}

//Dashboard
const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
const graficoBarras = new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: ['Solar', 'Eólica', 'Hidroeléctrica', 'Biocombustible', 'Geotérmica'],
    datasets: [{
      label: 'Producción (TWh)',
      data: [1500, 1200, 2200, 500, 200],
      backgroundColor: ['#f7b733', '#1e90ff', '#32cd32', '#ff8c00', '#8a2be2']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Producción Global por Fuente (2022)' }
    }
  }
});

const ctxLineas = document.getElementById('graficoLineas').getContext('2d');
const graficoLineas = new Chart(ctxLineas, {
  type: 'line',
  data: {
    labels: ['1965', '1980', '1995', '2010', '2022'],
    datasets: [
      {
        label: 'Eólica (GW)',
        data: [0, 10, 80, 250, 800],
        borderColor: '#1e90ff',
        fill: false
      },
      {
        label: 'Solar PV (GW)',
        data: [0, 5, 30, 100, 900],
        borderColor: '#f39c12',
        fill: false
      },
      {
        label: 'Geotérmica (GW)',
        data: [5, 15, 25, 35, 50],
        borderColor: '#8e44ad',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Evolución de la Capacidad Instalada Global' }
    }
  }
});