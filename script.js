const body = document.querySelector('body'),
        openModal = document.querySelector('#callmy'),
        closeModal = document.querySelector('.close'),
        modal=document.querySelector('.pop_up')

const tabsParent= document.querySelector('.category'),
    galeryArr= document.querySelectorAll('.galery'),
    tabs=document.querySelectorAll('.tab_item');


closeModal.addEventListener('click',()=>{
    modal.style.display="none"
    body.style.overflow="scroll"

})


openModal.addEventListener('click',()=>{
    modal.style.display="block"
    
    body.style.overflow="hidden"
    
})

/*portfolio***********************************/
function showGalery(i=0){
    galeryArr[i].style.display='flex'
}

function hideGalery(){
    galeryArr.forEach(item=>{
        item.style.display="none"
    })
}

hideGalery();
showGalery();

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


 