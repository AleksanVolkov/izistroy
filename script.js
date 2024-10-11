const body = document.querySelector('body'),
        openModal = document.querySelector('#callmy'),
        closeModal = document.querySelector('.close'),
        modal=document.querySelector('.pop_up')



closeModal.addEventListener('click',()=>{
    modal.style.display="none"
    body.style.overflow="scroll"

})


openModal.addEventListener('click',()=>{
    modal.style.display="block"
    
    body.style.overflow="hidden"
    
})
