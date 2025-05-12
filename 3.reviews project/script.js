let imageChange=document.getElementById("personImage");
let nameChange=document.getElementById("name");
let roleChange=document.getElementById("role");
let descriptionChange=document.getElementById("description");
let rightBtn=document.getElementById("rBtn");
let leftBtn=document.getElementById("lBtn");
let surpiseReview= document.getElementById("surprise");
let currentIndex=0;
let profileContent =[{name:"Susan Anderson",role:"UI/UX Designer",description:"I absolutely loved the layout of this website! Everything is clean, organized, and really easy to navigate. The color scheme is pleasant, and the user interface feels modern and responsive. Great job!",image:"person-1.jpeg"},
                     {name:"Ramesh Kumar",role:"Frontend Developer",description:"This site loads fast and feels super intuitive. I especially liked how the review slider works—smooth and interactive. Whoever built this clearly understands both design and usability."

,image:"person-2.jpg"},
                     {name:"Ramu Verma",role:"Backend Engineer",description:"Impressive work! The responsiveness of the page is spot-on. I viewed it on both mobile and desktop, and everything adapted perfectly. The animations and transitions are a nice touch.",image:"person-3.jpg"},
                     {name:"Bolla Guru Bhaskar",role:"Plsql Developer",description:"Great attention to detail! I tried clicking every button and feature, and everything worked seamlessly. No broken links or layout glitches—very professionally done.",image:"person-4.jpeg"}
];
let randomNumber;
rightBtn.addEventListener("click",nextReview);
function nextReview(){
   currentIndex++;
   if(currentIndex>=profileContent.length){
    currentIndex=0;
   }
   contentLogic();
}
leftBtn.addEventListener("click",prevReview);
function prevReview(){
    currentIndex--;
     if (currentIndex < 0) {
    currentIndex = profileContent.length - 1; // Loop to last item
  }
    contentLogic();
}
function contentLogic(){
   nameChange.textContent=profileContent[currentIndex].name;
   roleChange.textContent=profileContent[currentIndex].role;
   descriptionChange.textContent=profileContent[currentIndex].description;
   imageChange.src=profileContent[currentIndex].image;
}
//random review
surpiseReview.addEventListener("click",function(){
   randomNumber= Math.floor(Math.random()*profileContent.length);
    nameChange.textContent=profileContent[randomNumber].name;
   roleChange.textContent=profileContent[randomNumber].role;
   descriptionChange.textContent=profileContent[randomNumber].description;
   imageChange.src=profileContent[randomNumber].image;
});
