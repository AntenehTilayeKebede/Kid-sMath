const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
 const audio=document.getElementById("myaudio");
 var answer=0;
 function generate_equation(){
   var num1=Math.floor(Math.random()*13);
   var num2=Math.floor(Math.random()*13);
    var dummyAnswer1=Math.floor(Math.random()*13);
    var dummyAnswer2=Math.floor(Math.random()*13);
    var allAnswers=[];
    var switchAnswers=[];

    answer=num1+num2;
    document.getElementById("num1").innerText=num1;
    document.getElementById("num2").innerText=num2;
    allAnswers=[answer,dummyAnswer1,dummyAnswer2];
    for(i=allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0]);
    }
    
    option1.innerText=switchAnswers[0];
    option2.innerText=switchAnswers[1];
    option3.innerText=switchAnswers[2];

 }
 option1.addEventListener("click",function(){
    if(option1.innerText==answer){
        generate_equation()

    }
    else{
        audio.play(); 
    }
 });

 option2.addEventListener("click",function(){
    if(option2.innerText==answer){
        generate_equation()

    }
    else{
        audio.play(); 
    }
 });

 option3.addEventListener("click",function(){
    if(option3.innerText==answer){
        generate_equation()

    }
    else{
        audio.play(); 
    }
 });
generate_equation();