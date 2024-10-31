const body = document.querySelector('body'),
        openModal = document.querySelectorAll('#callmy'),
        closeModal = document.querySelector('.close'),
        modal=document.querySelector('.pop_up')


function closeMod(){
    modal.style.display="none"
    body.style.overflow="scroll"
}

closeModal.addEventListener('click',()=>{
    closeMod()

})

openModal.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.style.display="block"
        body.style.overflow="hidden"
        
    })
})

/************************************************tg*/
const allForm= document.querySelector('#popUpForm'),
messageMod=document.querySelector('.message');
      
let TOKEN='7160931872:AAFX_4Ji0SmaLpaB4DHkWD1G3a6rauOO6GM';
let URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
let CHAT_Id= '-1002480212657';
      

  
allForm.addEventListener('submit',function(e){
    e.preventDefault()
  


   let message = '<b>Заявка с сайта</b>\n';
   message+=`<b>имя:</b>${this.name.value}\n`;
   message+=`<b>номер телефона:</b>${this.phone.value}`;

  
   
    axios.post(URI_API, {
       chat_id:CHAT_Id,
       parse_mode:'html',
       text:message
       
   })
   .then((res)=>{
     
    
    this.name.value=''
    this.phone.value='+375'
    allForm.style.display="none"
    messageMod.style.display="block"

    function resetMod(){
        allForm.style.display="flex"
        messageMod.style.display="none"
        setTimeout(closeMod(),500)

    }
    setTimeout(resetMod,3500)
   
   })

 })
 //   .catch((error)=>{
//     errorM.style.display="block";
//     errorM.textContent =`собщение не отправленно!!!  код ошибки: ${error}`
//     spiner.style.display = 'none';
    
//   })
/**/




 