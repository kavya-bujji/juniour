const toggleBtn = document.getElementById('toggle')
const container = document.getElementById('container')
const mainBoxes = document.querySelectorAll('.main-box')
const overviewBoxes = document.querySelectorAll('.overview-box')
const mode = document.getElementById('mode')
const large = document.querySelectorAll('.large')

toggleBtn.addEventListener('click',()=>{
    if(mode.textContent==='Dark Mode'){
        mode.innerText = 'light Mode'
    }else{
        mode.innerText = 'Dark Mode'
    }
    mode.classList.toggle('show')
    container.classList.toggle('show');
    mainBoxes.forEach((boxes)=>{
        boxes.classList.toggle('show')
    })
    overviewBoxes.forEach(boxes=>{
        boxes.classList.toggle('show')
    })
    large.forEach(item=>{
        item.classList.toggle('show')
    })
    
})