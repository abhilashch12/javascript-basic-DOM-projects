let numberTarget = document.getElementById("number");
let dBtn = document.getElementById("dBtn");
let rBtn = document.getElementById("rBtn");
let iBtn = document.getElementById("iBtn");
let result=0;
rBtn.addEventListener("click",function(){
    result=0;
   color();
    numberTarget.textContent=result;
});
iBtn.addEventListener("click",add);
function add(){
  result++;
  numberTarget.textContent=result;
   color();
}
dBtn.addEventListener("click",sub);
function sub(){
  result--;
  numberTarget.textContent=result;
   color();
}
function color(){
if(result<0){
    numberTarget.classList.add("belowZero");
    numberTarget.classList.remove("aboveZero");
}
else if(result>0){
    numberTarget.classList.add("aboveZero");
    numberTarget.classList.remove("belowZero");
}
else{
    numberTarget.classList.add("Zero");
    numberTarget.classList.remove("aboveZero");
    numberTarget.classList.remove("belowZero");
}
}