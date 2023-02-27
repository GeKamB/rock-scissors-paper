
const selection = ["rock", "scissors", "paper"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = e.target.id 
    computerSelection = ComputerChoice()   
    playRound(playerSelection, computerSelection)
    

    
  })
})


// function to decide computer's random choice
const ComputerChoice = function () {
  
    return selection[Math.floor(Math.random() * selection.length)]
    
   
  }
    
// this function is mechanism of a single round
function playRound(playerSelection, computerSelection) {
  
    switch (playerSelection + computerSelection) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
         playerScore++;
         console.log("YOU WIN ! ###  " +
                      playerSelection +
                      " beats " +
                      computerSelection +
                      " player: " +
                      playerScore + 
                      " " + 
                      "computer: " +
                       computerScore);

          
        break;
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        computerScore++;
        console.log("YOU LOSE ! ###  " +
                    computerSelection +
                    " beats " +
                    playerSelection +
                    " ### player: " +
                     playerScore +
                     " " +
                    "computer: " +
                     computerScore);
        
        break;
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
        console.log("It's a draw ###  " +
                    playerSelection +
                     " : " +
                     computerSelection +
                     " player: " +
                     playerScore + 
                     " " + 
                     "computer: " + 
                     computerScore);
      
      break
    }
  }

  
    
  
   
 
//This function plays five rounds of the playGame function.
/*
function playGame() {

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = ComputerChoice();
    playRound(playerSelection, computerSelection);

   
}

}

playGame() */









