const selection = ["rock", "scissors", "paper"];
let playerscore = 0;
let computerscore = 0;

// function to get computer choice
const getComputerChoice = function() {
    return selection[Math.floor(Math.random() * selection.length)];
}
// single round function can be used  for others game where can be only winner/looser and a draw 
function playRound(playerSelection, computerSelection) {
  
    switch (playerSelection + computerSelection) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
         playerscore++;
         console.log("YOU WIN ! ###  " + playerSelection + " beats " + computerSelection + " player: " + playerscore + " " + "computer: " + computerscore);

          
        break;
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        computerscore++;
        console.log("YOU LOSE ! ###  " + computerSelection + " beats " + playerSelection + " ### player: " + playerscore + " " + "computer: " + computerscore);
        
        break;
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
        console.log("It's a draw ###  " + playerSelection + " : " + computerSelection + " player: " + playerscore + " " + "computer: " + computerscore);
      
      break
    }
  }
    
  
   
 
//five rounds of the game 

function game() {

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

}

game()









