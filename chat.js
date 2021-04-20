const settings=document.querySelector(".main_top_lastEle")
const input=document.querySelector("#color")



settings.addEventListener("click", e=>{
document.querySelector('.choice').classList.toggle("active")
})

input.addEventListener("input", e=>{
document.body.style.background=e.target.value
localStorage.setItem("color-body", JSON.stringify(e.target.value))
})

const color = localStorage.getItem('color-body')
    if(color){
    document.body.style.background=  JSON.parse(color)
    
    }




