const submit=document.getElementById("btn");
const res=document.getElementById("res");
let attempt=document.getElementById("attempt");
const playagain=document.getElementById("playagain");
let guess;
count=0;
const max=100;
const min=0;
let rm=Math.floor(Math.random()*(max-min+1))+min;

submit.onclick=function(){
    guess=Number(document.getElementById("value").value);
    count++;
    attempt.textContent=count;
    
    if(isNaN(guess)){
        res.textContent='Please enter a valid number.';
        return;
    }
    if(guess>100 || guess<1){
        count--;
        res.textContent='Guess should be between 1-100.';
    }
    else if(guess>rm){
        res.textContent='Your guess is high.';

    }
    else if(guess<rm){
        res.textContent='Your guess is low.';
    }
    else{
        res.textContent=`Your guess is right. The number is ${rm}. It took you ${count} attempts.`;
        
        playagain.onclick = () => location.reload();
      


    }
}

