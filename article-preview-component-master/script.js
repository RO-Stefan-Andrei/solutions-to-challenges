const myBtn = document.querySelector(".myBtn");
const shareBtn = document.querySelector(".share");
const activeBtn = document.querySelector(".active");

myBtn.addEventListener("click" , function(){
    if( shareBtn.classList.contains("nonActive")){
        shareBtn.classList.toggle("active");
        shareBtn.classList.add("active");
        shareBtn.classList.remove("nonActive")
    }else {
        shareBtn.classList.remove("active");
        shareBtn.classList.add("nonActive");
    };
  
})

