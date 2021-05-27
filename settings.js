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
const choose = document.querySelector(".select")
const selectImg = document.querySelector(".select_content img")
const local_ava = localStorage.getItem('currentuser')


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


