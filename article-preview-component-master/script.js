const myBtn = document.querySelector(".myBtn");
const shareBtn = document.querySelector(".partajare");

myBtn.addEventListener("click" , function(){
    shareBtn.classList.toggle("partajare");
    shareBtn.classList.add("active");
})