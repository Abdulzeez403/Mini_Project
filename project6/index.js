const contactPage = document.querySelector(".container");
const content2 = document.querySelector(".content2");
const close = document.querySelector("#close");
const parentbtn = document.querySelector(".parentBtn");

parentbtn.addEventListener("click", ()=>{
  content2.classList.remove('active');
  contactPage.classList.add('active');
})
close.addEventListener("click", ()=>{
  content2.classList.add('active');
  contactPage.classList.remove('active');
})