let totalCharacter = document.querySelector(".total-character");
let Remaining = document.querySelector(".Remaining");
let textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", ()=>{
  totalCharacter.innerHTML = "Total character:" + textarea.value.length;
  Remaining.innerHTML =  textarea.getAttribute("maxLength") - textarea.value.length ;
})