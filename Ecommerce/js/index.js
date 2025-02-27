const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    if(scrollY >= 260){
        navbar.classList.add('bg');
    }else{
        navbar.classList.remove('bg');
       }
})
const collageImages = [...document.querySelectorAll('.image-collage')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if(index != i){
                image.Style.filter = 'blur(50px)';
                item.style.zIndex = 2; 
            }
        })
    })
})

item.addEventListener('mouseleave', () => {
    collageImages.map((image, index) => {
        image.style = null;
    })
})