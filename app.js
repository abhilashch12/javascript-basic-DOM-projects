const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnTarget = document.getElementById("btn-hero");
const colorTarget = document.querySelector(".color");
btnTarget.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random()*colors.length);
    const selectedColor = colors[randomNumber];
    document.body.style.backgroundColor = selectedColor;
    colorTarget.textContent=selectedColor;
});

