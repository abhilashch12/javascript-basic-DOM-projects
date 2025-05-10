const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnTarget = document.getElementById("btn");
const colorTarget = document.querySelector(".color");
function getRandomColor(){
    let color="#";
    for(let i=0;i<6;i++){
        let randomNumber=Math.floor(Math.random()*hex.length);
        color+=hex[randomNumber];

    }
    return color;
}
btnTarget.addEventListener("click",function(){
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorTarget.textContent = randomColor;
});

