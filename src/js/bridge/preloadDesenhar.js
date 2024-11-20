import Desenhar from "../class/Desenhar.js";

const canvas = document.getElementById('canvas')

const desenho = new Desenhar()

canvas.addEventListener('mousedown', (event) =>{
    desenho.comecouDesenho(event)
})


canvas.addEventListener('mousemove', (event) =>{
    desenho.desenhando(event)
})


canvas.addEventListener('mouseup', (event) =>{
    desenho.parouDesenhar(event)
})

canvas.addEventListener('mouseout', (event) =>{
    desenho.parouDesenhar(event)
})

const clear_btn = document.getElementById('clearCanva')
clear_btn.addEventListener('click', () =>{
    desenho.limparCanvas()
})