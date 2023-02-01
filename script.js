const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const modelBg = document.querySelector('.model-background')
const modelContent = document.querySelector('.model-content')

openBtn.addEventListener('click', ()=> {
    modelBg.style.display = 'block'
    modelContent.style.display = 'block'
})

closeBtn.addEventListener('click', ()=> {
    modelBg.style.display = 'none'
    modelContent.style.display = 'none'
})