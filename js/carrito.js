const imgNintendo = document.querySelector(".Nintendo");
const array = [
    document.querySelector(".Nintendo"), 
    document.querySelector(".camara"),
    document.querySelector(".camara-webp"),
    document.querySelector(".chaqueta"),
    document.querySelector(".epson"),
    document.querySelector(".audifonos"),
]

const number = document.querySelector('#number')
imgNintendo.addEventListener('click', ()=>{
    number.textContent = 1
})

let m = 0
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", ()=> {
        m += 1
        number.textContent = m 
    })
}