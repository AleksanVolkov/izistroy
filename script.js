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


/**SERVICES********************************** */

 const  servicesParents = document.querySelector('.services_items'),
        servicesItem = document.querySelectorAll('.services_item');
        



        function showService(i){
            servicesItem[i].style.transition='0.7s'
            servicesItem[i].style.overflow='scroll'
            servicesItem[i].style.height='350px'
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


 