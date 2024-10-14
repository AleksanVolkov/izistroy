const tabsParent= document.querySelector('.category'),
    galeryArr= document.querySelectorAll('.galery'),
    tabs=document.querySelectorAll('.tab_item');

/*portfolio***********************************/
function showGalery(i){
    galeryArr[i].style.display='flex'
}

function hideGalery(){
    galeryArr.forEach(item=>{
        item.style.display="none"
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

