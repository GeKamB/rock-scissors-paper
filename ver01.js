
const selection = ["rock", "scissors", "paper"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const round = document.querySelector('.round');
const playerDisplay = document.querySelector('.playerDisplay');
const computerDisplay = document.querySelector('.computerDisplay');
let playerName = document.querySelector('.playerName');
let userName;

function askUserName() {
  userName = prompt("Please enter your name:");
  changeName(userName); 
}





askUserName(); 
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
   
    playerSelection = e.target.id ;
    computerSelection = ComputerChoice();
    button.classList.add('playing'); 
    
   
    playGame()
    

    
  })
})

const btt1ns = Array.from(document.querySelectorAll('.bttn'));
btt1ns.forEach(key => key.addEventListener('transitionend', removeTransition));


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
         round.textContent = `${userName} wins! ${playerSelection} beats ${computerSelection}`;
         round.style.color = "#0be60bd5";
         playerDisplay.textContent = `${playerScore}`;
         computerDisplay.textContent = `${computerScore}`;        

          
        break;
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        computerScore++;
        round.textContent = `Computer wins ! ${computerSelection} beats ${playerSelection} `;
        round.style.color = "red";
        playerDisplay.textContent = `${playerScore}`;
         computerDisplay.textContent = `${computerScore}`;
        
        
        break;
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
        round.textContent = `It's a draw ${playerSelection} : ${computerSelection}`;
        playerDisplay.textContent = `${playerScore}`;
         computerDisplay.textContent = `${computerScore}`;
         round.style.textShadow = '-1px -1px .5rem rgba(134, 248, 3, 0.932)';
         round.style.color = 'white';
         

      
      break
    }
    console.log(playerSelection, computerSelection)
  }

  
    
  
   
 

function playGame() {  
 

  playRound(playerSelection, computerSelection); 
  
  if (playerScore == 5 || computerScore == 5) {
    setGameOver()
  } 

  
   


}

function setGameOver() {   
  document.getElementById("rock").disabled = true;
  document.getElementById("scissors").disabled = true;
  document.getElementById("paper").disabled = true;
  resetButton = document.createElement('button');
  resetButton.setAttribute('id', 'reset')
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);  
  resetButton.addEventListener('click', resetGame);
  document.getElementById('reset').focus();
  
}

function resetGame() {
  askUserName(); 
  document.getElementById("rock").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("paper").disabled = false;
  playerScore = 0;
  computerScore = 0;
  round.textContent = "";
  playerDisplay.textContent = `${playerScore}`;
  computerDisplay.textContent = `${computerScore}`;

  
  resetButton.parentNode.removeChild(resetButton);
  
  

  
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function changeName(name) {
  playerName.textContent = `${userName}`; 
}











