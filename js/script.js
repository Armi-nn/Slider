'use strict'
const sliderItems=document.querySelectorAll('.slider-items')
function removeActiveClass(){
    for(let i=0;i<sliderItems.length;i++){
        sliderItems[i].classList.remove('active')
    }
}
for(let i=0;i<sliderItems.length;i++){
    sliderItems[i].addEventListener('click',()=>{
        removeActiveClass()
        sliderItems[i].classList.add('active')
    })
}