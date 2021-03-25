let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let range =  document.querySelector('.range ')
let box =  document.querySelector('.box ')
let count = document.querySelector('.count')
let currentEffect
blur.addEventListener('click',()=>{
    blurEffect()
})
sepia.addEventListener('click',()=>{
    sepiaEffect()
})
invert.addEventListener('click',()=>{
    invertEffect()
})
range.addEventListener('input',()=>{
    count.textContent = `${range.value}%`
    if (currentEffect === 'blur')  blurEffect()
    if (currentEffect === 'sepia') sepiaEffect()
    if (currentEffect === 'invert') invertEffect()
})

function blurEffect(){
    box.style.filter = `blur(${range.value}px)`
    currentEffect = `blur`
    sepia.classList.remove('active')
    invert.classList.remove('active')
    blur.classList.add('active')

}
function sepiaEffect(){
    box.style.filter = `sepia(${range.value}%)`
    currentEffect = `sepia`
    invert.classList.remove('active')
    blur.classList.remove('active')
    sepia.classList.add('active')

}
function invertEffect(){
    box.style.filter = `invert(${range.value}%)`
    currentEffect = `invert`
    sepia.classList.remove('active')
    blur.classList.remove('active')
    invert.classList.add('active')

}
blurEffect()