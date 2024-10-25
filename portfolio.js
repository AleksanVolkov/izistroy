const tabsParent= document.querySelector('.category'),
    buttonModal = document.querySelectorAll('#modal_portfolio')
    galeryArr= document.querySelectorAll('.galery'),
    tabs=document.querySelectorAll('.tab_item');
   


/*portfolio***********************************/
function showGalery(i){
    galeryArr[i].style.display='flex'
    tabs[i].setAttribute('style',"color:#FFFFFF;border:1px solid #ffffff;font-weight:400;background-color: #af8946")

}

function hideGalery(){
    galeryArr.forEach(item=>{
        item.style.display="none"
    })
    tabs.forEach(item=>{
        item.setAttribute('style',"")
    })
}

hideGalery();
showGalery(0);

tabsParent.addEventListener('click',(e)=>{
    const target=e.target;
    if(target && target.classList.contains('tab_item')){
        tabs.forEach((item,i)=>{
            if(target==item){
                hideGalery()
                showGalery(i);
            }
        })
    }

})


buttonModal.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.style.display="block"
        body.style.overflow="hidden"
    })
})

closeModal.addEventListener('click',()=>{
    modal.style.display="none"
    body.style.overflow="scroll"

})
