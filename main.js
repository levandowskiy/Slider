let sliderWrapper = document.getElementById("slider-wrapper");
let rightSliderBtn = document.querySelector(".right-slider-btn");
let leftSliderBtn = document.querySelector(".left-slider-btn");
let counter = 1;

sliderWrapper.addEventListener("click", e => {
    if(e.target.classList.contains("right-slider-btn")){
        ++counter;
        document.querySelector(`img:nth-of-type(${counter})`).classList.add("active");
        document.querySelector(`img:nth-of-type(${counter-1})`).classList.remove("active");
    }

    if(e.target.classList.contains("left-slider-btn")) {
        document.querySelector(`img:nth-of-type(${counter})`).classList.remove("active");
        document.querySelector(`img:nth-of-type(${counter-1})`).classList.add("active");
        --counter;
    }

    if(counter == 1) {
        leftSliderBtn.setAttribute("disabled", "")
    }

    if(counter > 1 && leftSliderBtn.hasAttribute("disabled")) {
        leftSliderBtn.removeAttribute("disabled")
    } 

    if(counter == sliderWrapper.getElementsByTagName('img').length) {
        rightSliderBtn.setAttribute("disabled", "");
    } 

    if((counter < sliderWrapper.getElementsByTagName('img').length) && rightSliderBtn.hasAttribute("disabled")) {
        rightSliderBtn.removeAttribute("disabled")
    }
});