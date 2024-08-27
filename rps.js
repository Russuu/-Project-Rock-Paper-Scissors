

let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let randomNumber=Math.random();
    if ((randomNumber<=1/3) && (randomNumber>=0)) {
       
        return 'rock';
    
    } else if((randomNumber>1/3) && (randomNumber<=2/3)) {
      
        return 'scissors';
        
    }else if((randomNumber>2/3) && (randomNumber<1)){
        
        return 'paper';
       
    }
}

function getHumanChoice(){
   
    let humanChoice=window.prompt("Please select between Rock, Scissors and Paper");
    let insensitiveHumanChoice=humanChoice.toLowerCase();
    if (insensitiveHumanChoice==="rock") {
       
        return 'rock';
    } else if(insensitiveHumanChoice==="scissors"){
        
        return 'scissors';
    }else if(insensitiveHumanChoice==="paper"){
        
        return 'paper';
    }else{
        console.log("You have some shady stuff there...")
    }
}

function playRound(humanChoice,computerChoice){

    if (humanChoice===computerChoice) {
        console.log(`You chose was ${humanChoice} and the computer choice was ${computerChoice}`);
        console.log("It's a draw...");
        return 'draw';
    } else if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log(`You chose was ${humanChoice} and the computer choice was ${computerChoice}`);
        console.log("You won.");
        return 'victory';
        
    }else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log(`You chose was ${humanChoice} and the computer choice was ${computerChoice}`);
        console.log("You won.");
        return 'victory';
    }else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log(`You chose was ${humanChoice} and the computer choice was ${computerChoice}`);
        console.log("You won.");
        return 'victory';
    }else{
        console.log("You Lost!!")
        console.log(`You chose was ${humanChoice} and the computer choice was ${computerChoice}`);
        return 'defeat';
    }
}

function playGame(){

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        const result=playRound(humanSelection,computerSelection);
        if(result==='victory'){
            humanScore+=1;
        }else if(result==='defeat'){
            computerScore+=1;
        }else if(result==='draw'){
            humanScore+=0;
            computerScore+=0;
        }
        else{
            computerScore+=1;

        }
    }
    console.log(`Human Score ${humanScore} and computer score ${computerScore}`);
}

playGame();








