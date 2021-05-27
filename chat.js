
let all_new_post = [];
let new_container_id = []

const add = document.querySelector(".main_global_chat")







const input = document.querySelector(".inputMes")
input.addEventListener("input", e => {
    
    if (input.value.trim()) {
        document.querySelector(".button_input").innerHTML = `<button class="addtext">ADD</button>`;
        //!<button class="addtext" onclick="change_color_data()">ADD</button>`
        
        document.querySelector('.addtext').addEventListener("click", b => {
       
            const id = 'id_'+getRandom()+getRandom()+getRandom()
            paint_post(e.target.value, id)
            console.log(id);
            const local_ava =  JSON.parse(localStorage.getItem('currentuser'));
            
            all_new_post.push(new_post(local_ava.ava,e.target.value,local_ava.name,id,null ))
   
            add.scrollTo(0, add.scrollHeight-10)
            
           localStorage.setItem("all_new_post",JSON.stringify(all_new_post))
           
           input.value = ''
           
        b.target.remove()
    })
    
} else {
        document.querySelector(".button_input").innerHTML = ``;
    }

})
const paint_post = (e,_id) => {
  e.audio &&  console.log(e);

    
    const isType = typeof(e) === 'string' 
    const local_ava = isType ? JSON.parse(localStorage.getItem('currentuser')) : e
    const local_color =JSON.parse(localStorage.getItem('color-body')) 
const value = isType ? e : e.value
const id = _id? _id:local_ava._id  




add.innerHTML += ` <div 
    id="${id}"
    class="conteiner_content_message">
    <div class="close_message">X</div>
    <img src="${local_ava.ava}"> 
<div class="conteiner_text">
<div class="conteiner_text_top">
    <h2 class="name">${local_ava.name}</h2>
    <p class="time"> ${isType
        ?new Date().toLocaleString()
        :e.date
    }PM</p>
    </div>
    


    
    ${e.audio

?`<audio src="${URL.createObjectURL(e.audio)}" controls></audio>`
:value.includes('@')
? ` <p class="conteiner_text_blue">${value}</p> `
: `<p>${value}</p>`
}




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
    new_container_id.push(id)
    
    
    
add_new_function_for_id()
}
const add_new_function_for_id = ()=>{
    for(const newid of new_container_id){
        
        
            document.querySelector('#'+newid).addEventListener("dblclick",e=>{
                
                document.querySelector(`#${newid} .close_message`).classList.toggle("open")

                document.querySelector(`#${newid} .close_message`).addEventListener("click", e=>{
                    
                all_new_post = all_new_post.filter(e=>e._id !== newid)
                
                localStorage.setItem("all_new_post",JSON.stringify(all_new_post))
                document.querySelector('#'+newid).remove()
                
            })
        }
        );
    }
}




const new_post = (ava, value, name, _id,audio)=>({ava,value,name,date: new Date().toLocaleString(),_id, audio})





if(JSON.parse(localStorage.getItem('all_new_post'))){

    const all_post=JSON.parse(localStorage.getItem('all_new_post'))
    all_new_post = [...all_post]

 all_new_post.map(item=> {
   
paint_post(item) })
}



const container_input = document.querySelector('.container_input')


const voice=document.querySelector(".voice")



voice.addEventListener("mousedown", e=>{
    const audioArr=[]
    
  navigator.mediaDevices.getUserMedia({audio:true})
  .then(audio=>{
      const newAudio=new MediaRecorder(audio)
      newAudio.start()
      
   newAudio.addEventListener("dataavailable",e=>{
       audioArr.push(e.data)
    })
    newAudio.addEventListener("stop",e=>{
  const convertation=new Blob(audioArr,{type:"audio/wav"})
      const id = 'id_'+getRandom()+getRandom()+getRandom()
      const local_ava =  JSON.parse(localStorage.getItem('currentuser'));
      const post = new_post(local_ava.ava,null,local_ava.name,id,convertation )
      all_new_post.push(post)

      paint_post(post)

      //! AudioBuffer
    //   const audiocont = new AudioContext()
    //   console.log(
    //      audiocont
    //   );
    //   localStorage.setItem("a",JSON.stringify(audioArr))
    // //   localStorage.setItem("all_new_post",JSON.stringify(all_new_post))
    })
    
    voice.addEventListener("mouseup", e=>{
        newAudio.stop()

    })
})


})






