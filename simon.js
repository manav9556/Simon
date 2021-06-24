var red=document.querySelector("#tred");
var green=document.querySelector("#tgreen");
var yellow=document.querySelector("#tyellow");
var blue=document.querySelector("#tblue");
const main=document.querySelectorAll(".simon");
var heading=document.getElementById("heading");
var strt = document.getElementById("strt")
var main1=document.querySelector("#main-div");
var score = 0;
var level=0;
var y;

var reset=document.querySelector(".btn");


strt.addEventListener("click" ,(event)=>{
    
    heading.innerHTML="welcome";

});

main1.addEventListener("click",function()
{
   strt.style.display="none";
    var rndom=Math.floor(Math.random()*4)+1;
  
    var actbtn=main[rndom-1];

    y = actbtn.id
    console.log(actbtn.id)

    actbtn.classList.add("animation");
    
    setTimeout(function()
    {
        actbtn.classList.remove("animation");
    },20);

})


red.addEventListener("click", (event)=>{
    var x = red.id;
    console.log(x)

    if(x==y){
        console.log(score)
        score++;
        if(score%2===0 && score>0)
        {
         level=level+1;
         heading.innerHTML="level"+ " " + level;
         var audio=new Audio("levelup.wav");
         audio.play();

         }
        
        var audio=new Audio("red.mp3");
            audio.play();

    }
    else{
        
        
        var audio=new Audio("wrong.mp3");
            audio.play();
         body.style.backgroundColor = "#F51720";
         heading.innerHTML="Game Over " + " " + " your score is " +score;
         
         reset.style.display="block";
    }
  })
yellow.addEventListener("click", (event)=>{
    var x = yellow.id;
    
    console.log(x)
    if(x==y){
        score++;
        if(score%2===0 && score>0)
        {
         level=level+1;
         heading.innerHTML="level"+ " " + level;
         var audio=new Audio("levelup.wav");
         audio.play();
         }
        var audio=new Audio("yellow.mp3");
            audio.play();

    }
    else{
        
        var audio=new Audio("wrong.mp3");
            audio.play();
            body.style.backgroundColor = "#F51720";
           heading.innerHTML="Game Over " + " " + " your score is " +score;
           reset.style.display="block";
    }
})
blue.addEventListener("click", (event)=>{
    var x = blue.id;
  
    console.log(x)
    if(x==y){
        score++;
        if(score%2===0 && score>0)
        {
         level=level+1;
         heading.innerHTML="level"+ " " + level;
         var audio=new Audio("levelup.wav");
         audio.play();

         }
        var audio=new Audio("blue.mp3");
            audio.play();

    }
    else{
        
        var audio=new Audio("wrong.mp3");
            audio.play();
            body.style.backgroundColor = "#F51720";
             heading.innerHTML="Game Over " + " " + " your score is " +score;
             reset.style.display="block";
    }
})
green.addEventListener("click", (event)=>{
    var x = green.id;
   
    console.log(x)
    if(x==y){
        score++;
        if(score%2===0 && score>0)
        {
         level=level+1;
         heading.innerHTML="level"+ " " + level;
         var audio=new Audio("levelup.wav");
         audio.play();

         }
        var audio=new Audio("green.mp3");
            audio.play();
            

    }
    else{
        
        var audio=new Audio("wrong.mp3");
            audio.play();
            body.style.backgroundColor = "#F51720";
          
            heading.innerHTML="Game Over " + " " + " your score is " +score;
            reset.style.display="block";
    }
 })

