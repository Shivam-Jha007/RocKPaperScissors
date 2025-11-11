
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreh=document.querySelector("#user-score");
const compScoreh=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;



const CompChoice=()=>{
    //rock,paper,scissor
    const options=["r","p","s"];
    const randomCh=Math.floor(Math.random()*3);   
    return options[randomCh];
}

const drawGame =() =>{
    console.log("game was draw");
    msg.innerText="It was a draw";
    msg.style.backgroundColor="grey";
}

const shoWin=(userWin,userChoice,compCh)=>{
    if (userWin===true){
        userScore++;
        userScoreh.innerText=userScore;
        console.log("you win");
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreh.innerText=compScore;
        console.log("you lose ");
        msg.innerText="You Lose"
        msg.style.backgroundColor="red";
    }
}


const playgame =(userChoice) =>{
    console.log("userChoice =",userChoice);
    //generate comp choice
    const compCh=CompChoice();
    console.log("Comp choice =",compCh);
    if (userChoice === compCh){
        drawGame();
        
    }
    else{
        let userWin=true;
        if (userChoice==="r"){
            userWin= compCh==="p" ? false : true;
        }
        else if(userChoice==="p"){
            userWin=compCh==="s"? false:true;
        }
        else{
            userWin=compCh==="r"?false:true;
        }
        shoWin(userWin,userChoice,compCh);
    }
    


}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const usercid=choice.getAttribute("id");
        console.log(usercid," was clicked");
        playgame(usercid);
    });


});
