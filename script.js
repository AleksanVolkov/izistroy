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



/*slider...........*/

const arrowRight = document.querySelectorAll('.arrow_right'),
      arrowLeft = document.querySelectorAll('.arrow_left'),
      galaryField= document.querySelector('.galary_field'),
      galery= document.querySelector('.galery');


      galery.addEventListener('click',(e)=>{
        
        const target= e.target;
        console.dir(target.className)

        if(target.tagName=='DIV' && target.className=="arrow_right" ){
            console.log('click')
            for(let i=0;i<=galaryField.length;i++){
                console.log('for')
            }
            galaryField.style.transform= 'translateX(-325px)';
            galaryField.style.transition= 'all 0.8s';
        }
         else if(target.tagName=='DIV' && target.className=="arrow_left" ){
            galaryField.style.transform= 'translateX(0)';
            galaryField.style.transition= 'all 0.8s';
        }
      })
      
      
      
      
      
      
      
      
      
      
    //   arrowRight.forEach((item)=>{
    //     item.addEventListener('click',(e)=>{
    //         const target= e.target;
    //         if(target==item){
    //             console.log('click')
    //             galaryField.style.transform= 'translateX(-350px)';
    //             galaryField.style.transition= 'all 0.8s';
    //         }
    //     })
    //   })

      
    //   arrowLeft.forEach((item)=>{
    //     item.addEventListener('click',(e)=>{
    //         const target= e.target;
    //         if(target==item){
    //             galaryField.style.transform= 'translateX(-350px)';
    //             galaryField.style.transition= 'all 0.8s';
    //         }
    //     })
    //   })