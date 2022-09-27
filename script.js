const frutas = ["laranja", "limão", "uva"];

const firstLi = document.getElementById("fruta-1")
 
firstLi.innerHTML = frutas[0]

const secondLi = document.getElementById("fruta-2")
 
secondLi.innerHTML = frutas[1]

const thirdLi = document.getElementById("fruta-3")
 
thirdLi.innerHTML = frutas[2]

const fourthLi = document.getElementById("fruta-4")

const inputFruta = document.getElementById("fruta-input")

const clicar = () => {
    fourthLi.innerHTML = inputFruta.value
}