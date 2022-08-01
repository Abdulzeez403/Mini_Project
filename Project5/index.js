const container = document.querySelector(".container");
const videoTape = document.querySelector(".videoTaper");
const watchBtn = document.querySelector("button");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener('click',()=>{
  videoTape.classList.add('active');
  container.classList.remove("active");

})

watchBtn.addEventListener("click",()=>{
  container.classList.add("active");
  videoTape.classList.remove('active');

})