let userSelection = "";
let computerSelection = "";
let roundWinnerName = document.querySelector(".round-winner")


let userScore = 0;
let computerScore = 0;
let round = 1;

let userScoreDisplay = document.querySelector(".user-score-display");
let computerScoreDisplay = document.querySelector(".compter-score-display");

userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;


let userChoice = document.querySelector(".user-choice");
let computerChoice = document.querySelector(".computer-choice");

let userSelectionDiv = document.querySelector("#user-options-div");

let roundResultExplanation = document.querySelector(".round-result-explanation");
roundResultExplanation.style.display = "none";

let choicesDisplay = document.querySelector(".choices-display");
choicesDisplay.style.display = "none";


let playNextRound = document.querySelector("#play-next-round");
playNextRound.style.display = "none";

let scoreboardMessage = document.querySelector(".scoreboard-message");
scoreboardMessage.style.display = "none";

let winner = document.querySelector(".winner");

let roundResult = document.querySelector(".round-result");
roundResult.style.display = "none";

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let roundNumber = document.querySelector(".round-number");

function usersPick() {
    userSelectionDiv.addEventListener("click", e => {
        e.preventDefault();
        userSelection = e.target.value;
        userChoice.textContent = String(userSelection);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        computersPick();
        roundWinner(userSelection, computerSelection)

    })
}

function computersPick() {
    let randomNumber = Math.floor(Math.random()*3) + 1;

    switch(randomNumber) {
        case 1:
            computerSelection = "rock";
            computerChoice.textContent = "rock";
            break;
        
        case 2:
            computerSelection = "paper";
            computerChoice.textContent = "paper";
            break;
        
        case 3: 
            computerSelection = "scissors";
            computerChoice.textContent = "scissors";
            break;
    }
    console.log(computerSelection)
    return(computerSelection);

}

function roundWinner(user, computer) {
    roundResultExplanation.style.display = "block";
    choicesDisplay.style.display = "flex";
    roundResult.style.display = "block";
    playNextRound.style.display = "block";

    if (user == computer) {
        roundResultExplanation.textContent = "You both chose " + user + ". This game is a draw. This round will be replayed." 
        roundWinnerName.textContent= "No one";

    } else if (user == "rock" && computer == "paper") {
        roundResultExplanation.textContent = computer + " covers " + user + "."
        computerScore = computerScore + 1;
        roundWinnerName.textContent = "Computer";
        round = round + 1;


    } else if (user == "rock" && computer == "scissors") {
        roundResultExplanation.textContent = user + " breaks " + computer + "."
        userScore = userScore + 1;
        roundWinnerName.textContent = "You";
        round = round + 1;

    } else if (user == "paper" && computer == "rock") {
        roundResultExplanation.textContent = user + " covers " + computer + "."
        userScore = userScore + 1;
        roundWinnerName.textContent = "You";
        round = round + 1;

    } else if (user == "paper" && computer == "scissors") {
        roundResultExplanation.textContent = computer + " cut " + user + "."
        computerScore = computerScore + 1;
        roundWinnerName.textContent = "Computer";
        round = round + 1;

    } else if (user == "scissors" && computer == "rock") {
        roundResultExplanation.textContent = computer + " breaks " + user + "."
        computerScore = computerScore + 1;
        roundWinnerName.textContent = "Computer";
        round = round + 1;

    } else if (user == "scissors" && computer == "paper") {
        roundResultExplanation.textContent = user + " cut " + computer + "."
        userScore = userScore + 1;
        roundWinnerName.textContent = "You";
        round = round + 1;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;  

    if (round > 5) {
        playNextRound.disabled = true;
        scoreboardMessage.style.display = "flex";
        
        if (userScore > computerScore) {
            winner.textContent = "You";
        } else if (computerScore > userScore) {
            winner.textContent = "Computer";
        }
    }
    
}

usersPick();


playNextRound.addEventListener("click", e => {
    e.preventDefault();
    roundNumber.textContent = round;
    roundResult.style.display = "none";
    scoreboardMessage.style.display = "none";
    playNextRound.style.display = "none";
    roundResultExplanation.style.display = "none";
    choicesDisplay.style.display = "none";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
})


