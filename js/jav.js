/*global document, prompt, console, alert*/
let navBar = document.querySelector("nav");
console.log( navBar.clientHeight);
window.onscroll = function() {
    if(window.pageYOffset >= navBar.clientHeight) {
        if(navBar.classList.contains("navbar-dark", "bg-dark") === false){
            navBar.classList.add("navbar-dark", "bg-dark");
           }
        document.body.style.paddingTop = navBar.clientHeight + 10 + "px";
    } else{
        if(navBar.classList.contains("navbar-dark", "bg-dark")){
            navBar.classList.remove("navbar-dark", "bg-dark");
           }
        document.body.style.paddingTop = 0;
    }
}

$(document).ready(function () {
    $('.carousel').carousel({
    interval: 0
});
})

//client sec
let clientConatant = document.querySelectorAll(".client-contant"),
    i = 0;
console.log(clientConatant.length)
setInterval(function() {
    "use strict";
    if (i < clientConatant.length  ){
        clientConatant.forEach(items => {
            items.classList.remove("active");
        });
        clientConatant[i++].classList.add("active");
    } else { i =0 }
}, 2000);

//projects
let proBtn = document.querySelectorAll(".projects ul li"),
    listImg = document.querySelectorAll(".img-cont");
console.log(proBtn)

proBtn.forEach(item => item.addEventListener("click", () => {
    proBtn.forEach(items => {
        items.classList.remove("active")
    })
    item.classList.add("active");
    for(let i = 0 ; i < listImg.length ; i++){
        if (item.getAttribute("data-pro") != listImg[i].getAttribute("data-pro") && item.getAttribute("data-pro") != "all" ) {
            listImg[i].parentElement.classList.add("hide")
        } else {
            listImg[i].parentElement.classList.remove("hide")
        }
    }
    
}))