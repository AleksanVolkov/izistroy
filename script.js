const body = document.querySelector('body'),
        openModal = document.querySelectorAll('#callmy'),
        closeModal = document.querySelector('.close'),
        modal=document.querySelector('.pop_up')




closeModal.addEventListener('click',()=>{
    modal.style.display="none"
    body.style.overflow="scroll"

})

openModal.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.style.display="block"
        body.style.overflow="hidden"
        
    })
})

/************************************************tg*/
const allForm= document.querySelector('#popUpForm');
      
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
    modal.style.display="none"
    body.style.overflow="scroll"
   
   
   })

 })
 //   .catch((error)=>{
//     errorM.style.display="block";
//     errorM.textContent =`собщение не отправленно!!!  код ошибки: ${error}`
//     spiner.style.display = 'none';
    
//   })
/**/


/**SERVICES********************************** */

 const  servicesParents = document.querySelector('.services_items'),
        servicesItem = document.querySelectorAll('.services_item');
        



        function showService(i){
            servicesItem[i].style.transition='0.7s'
            servicesItem[i].style.overflow='hidden'
            servicesItem[i].style.height='300px'
        }

        function hideService(){
           
            servicesItem.forEach(item=>{
                item.style.transition='0.7s'
                item.style.overflow='hidden'
                item.style.height='70px'
            })
        }
        
        hideService()
        showService(0)

        servicesParents.addEventListener('click',(e)=>{
           
            const target=e.target;
            servicesItem.forEach((item,i)=>{
                if( item==target || e.target.tagName == 'H3' && e.target.parentNode == item){
                    hideService()
                    showService(i)
                }
            })
        })


 