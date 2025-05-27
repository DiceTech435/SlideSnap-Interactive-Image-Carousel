const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlides(next = true){
    if(next){
        current += current > maxLeft ? -100 : current * -1; 
    }else{
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
}


let autoChange = setInterval(changeSlides, delay);
const restart = function() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlides, delay);
};

//Controls
document.querySelector(".next-slide").addEventListener("click", function(){
    changeSlides();
    restart();
});

document.querySelector("prev-slide").addEventListener("click", function(){
    changeSlides(false);
    restart();
});