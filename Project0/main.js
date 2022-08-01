
const Multiplayer=()=>{
  //variable
  let questions =document.querySelector(".question");
  let num1 =document.querySelector(".num1");
  let num2 =document.querySelector(".num2");
  let score =document.querySelector(".score");
  let number1 = Math.floor(Math.random()*10);
  let number2 = Math.floor(Math.random()*10);
  let InputValue =document.querySelector(".InputValue");
  let summit =document.querySelector("button");
  let correct = number1 + number2;
  let x = JSON.parse(localStorage.getItem("x"));
  if(!x){
    x = 0;
  }
  num1.innerHTML = number1;
  num2.innerHTML = number2; 
  score.innerText = `Score ${x}`;

  function LocalStorageUpdate(){
    localStorage.setItem("x", JSON.stringify(x));
  }
  summit.addEventListener("click", ()=>{
    let answer = +InputValue.value;
      if(answer === correct){
        x+=1;
        LocalStorageUpdate();
      }else{
        x-=1;        
        LocalStorageUpdate();
        
      }
Multiplayer();

  } ) 
  
    
}
Multiplayer();


