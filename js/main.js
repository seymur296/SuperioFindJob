
var sliderAll=document.querySelector("#slider .slider-all")
var sliderItem=document.querySelectorAll(".slider-item")
var sliderWidth=document.querySelector("#slider").offsetWidth;
sliderAll.style.width=sliderWidth*sliderItem.length+"px"
var next=document.querySelector(".next")
var prev=document.querySelector(".prev")
let currentSlider=0;
next.onclick=function(){
    sliderChange(currentSlider+1)
}

prev.onclick=function(a){
    a.target.style.color="red"
    sliderChange(currentSlider-1)
}

function sliderChange(cr){
    currentSlider=(cr+sliderItem.length) % sliderItem.length;
    sliderAll.style.left=-(sliderWidth*currentSlider)+"px"
}



const header=document.getElementById("header");

window.onscroll=function(){
    console.log()
    if(this.scrollY>120){
        header.classList.add("header-active")
    }else{
        header.classList.remove("header-active")
    }
}
