const users = [
    {
        ava: './img/3page/Jehua.png',
        _id: 'xqwdq23e',
        name: 'Jehua Stout'
    },
    {
        ava: "./img/3page/Ada.png",
        _id: 'asd32da',
        name: "Aada Laine"
        
    },
    {
        ava: "./img/3page/NalaHestler.png",
        _id: '12fdf54s',
        name: "Nala Hester"
    }
]
let all_new_post = []
const choose = document.querySelector(".select")
const selectImg = document.querySelector(".select_content img")
const local_ava = localStorage.getItem('currentuser')
const add = document.querySelector(".main_global_chat")




if (local_ava) {
    selectImg.src = JSON.parse(local_ava).ava

} else {
    localStorage.setItem('currentuser',JSON.stringify(users[2]) )
   
}
const settings = document.querySelector(".main_top_lastEle")
const color = document.querySelector("#color")


let isOpen_body = false
const fun_show = () => {
    isOpen_body = false
    setTimeout(() => isOpen_body = true, 200)

}
settings.addEventListener("click", e => {
    document.querySelector('.choice').classList.toggle("active")
    fun_show()
})
const change_collor_data = color => {

    for (const dataColor of document.querySelectorAll(".content_date")) {
        dataColor.style.background = color
    }
}

color.addEventListener("input", e => {
    change_collor_data(e.target.value);
    document.body.style.background = e.target.value
    localStorage.setItem("color-body", JSON.stringify(e.target.value))
})

const local_color = localStorage.getItem('color-body')
if (local_color) {
    document.body.style.background =
        JSON.parse(local_color)
    change_collor_data(JSON.parse(local_color))
}
// console.log(navigator.mediaDevices.getUserMedia({audio:true}));


const input = document.querySelector(".inputMes")
input.addEventListener("input", e => {
    
    if (input.value.trim()) {
        document.querySelector(".button_input").innerHTML = `<button class="addtext">ADD</button>`;
        //!<button class="addtext" onclick="change_color_data()">ADD</button>`

        document.querySelector('.addtext').addEventListener("click", b => {
       
          
        paint_post(e.target.value)
        const local_ava =  JSON.parse(localStorage.getItem('currentuser'))
            all_new_post.push(new_post(local_ava.ava,e.target.value,local_ava.name))
   
           add.scrollTo(0, add.scrollHeight-10)

           localStorage.setItem("all_new_post",JSON.stringify(all_new_post))

           input.value = ''
        })
    }

})

const paint_post = e => {
    
const isType = typeof(e) === 'string' 
    const local_ava = isType ? JSON.parse(localStorage.getItem('currentuser')) : e
    const local_color =JSON.parse(localStorage.getItem('color-body')) 
console.log(e);
const value = isType ? e : e.value
    
    add.innerHTML += ` <div class="conteiner_content_message">
<img src="${local_ava.ava}"> 
<div class="conteiner_text">
  <div class="conteiner_text_top">
    <h2 class="name">${local_ava.name}</h2>
    <p class="time"> ${new Date().toLocaleString()}PM</p>
    </div>
${value.includes('@')
? ` <p class="conteiner_text_blue">${value}</p> `
            : `<p>${value}</p>`

        }
<p></p>
<div>
</div>
</div>
<div class="content_container_center_date">
<div class="content_date">
${isType
    ?new Date().toLocaleString()
    :e.date
}
</div>  
</div>

</div>`
    change_collor_data(local_color)
}



const new_post = (ava, value, name)=>({ava,value,name,date: new Date().toLocaleString()})





if(JSON.parse(localStorage.getItem('all_new_post'))){

const all_post=JSON.parse(localStorage.getItem('all_new_post'))
all_new_post = [...all_post]
all_new_post.map(item=> {
   
    paint_post(item)
})
}

const choseOpen = document.querySelector('.content_ava_user')

setTimeout(() => choseOpen.style.transition = 'all .3s', 200)

const op_or_clo = () => {
    fun_show()
    choseOpen.classList.toggle("choose_open")
    document.querySelector('.select span').classList.toggle("arrow")


}
choose.addEventListener("click", op_or_clo)


choseOpen.addEventListener("click", e => {


    users.find((item => {

        if (e.target.closest("button")?.value == item._id) {
            selectImg.src = item.ava;

            //   записываем в localstorage обжект
            localStorage.setItem('currentuser', JSON.stringify(item))
            op_or_clo()
            document.querySelector('.choice').classList.toggle("active")

        }
    }))
})
document.body.addEventListener("click", e => {

    if (isOpen_body) {
        document.querySelector('.choice').classList.remove("active")
        choseOpen.classList.add("choose_open")
    }

    isOpen_body = false
})




const container_input = document.querySelector('.container_input')



const smile = [
    {
        smi: `&#128512`,
        _id: `dsdlslsm21`
    },
    {
        smi: `&#128515`,
        _id: `cxmxm,1`
    },
    {
        smi: `&#128516`,
        _id: `dopspd`
    },
    {
        smi: `&#128517`,
        _id: `zmz,x,`
    },
    {
        smi: `&#129315`,
        _id: `cmmcz1`
    },
]

const smiles = document.querySelector(".footer_left img")

smiles.addEventListener("click", e => {
    console.log(e)
    smile.find((item => {

        // if(e.target.closest("smile")?.smi==item._id){

    }))
})