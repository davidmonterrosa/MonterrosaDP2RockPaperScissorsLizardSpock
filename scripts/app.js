// ID Section
let playerVsPlayerBtn = document.getElementById("playerVsPlayerBtn");
let playerVsComputerBtn = document.getElementById("playerVsComputerBtn");

let computerBestOf1Btn = document.getElementById("computerBestOf1Btn");
let computerBestOf5Btn = document.getElementById("computerBestOf5Btn");
let computerBestOf7Btn = document.getElementById("computerBestOf7Btn");
let playerBestOf1Btn = document.getElementById("playerBestOf1Btn");
let playerBestOf5Btn = document.getElementById("playerBestOf5Btn");
let playerBestOf7Btn = document.getElementById("playerBestOf7Btn");

let instructions = document.getElementById("instructions");
let mainResult = document.getElementById("mainResult");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");

const replayBtn = document.getElementById("replayBtn");
const forfeit = document.getElementById("forfeit");
const mainMenuReturn = document.getElementById("mainMenuReturn");

const resultsTitle = document.getElementById("resultsTitle");
const resultsBodyMain = document.getElementById("resultsBodyMain");
const resultsBodyp1 = document.getElementById("resultsBodyp1");
const resultsBodyp2 = document.getElementById("resultsBodyp2");
const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");

const main = document.getElementById("main")
const gamePlayScreen = document.getElementById("gamePlayScreen");
const gameOverMenu = document.getElementById("gameOverMenu");
// const vsPlayer = document.getElementById("vsComputer");

// let pvpRockBtn = document.getElementById("pvpRockBtn");
// let pvpPaperBtn = document.getElementById("pvpPaperBtn");
// let pvpScissorsBtn = document.getElementById("pvpScissorsBtn");
// let pvpLizardBtn = document.getElementById("pvpLizardBtn");
// let pvpSpockBtn = document.getElementById("pvpSpockBtn");


// need a variable to track the move
let player1Move = "";
let player2Move = "";
let computerMove = "";

let player1Score = 0;
let player2Score = 0;
let computerScore = 0;

let opponent = "";
let matchLength = 0;

let player2Turn = false;

// let gameOverText = "";


const getComputerMove = async () => {
    const response = await fetch("https://monterrosarpslsv1-aaapdudtatbdgtc0.westus-01.azurewebsites.net/RPSLSGame/Play");
    const data = await response.text();
    return data;
}


function displayMainMenu() {
    main.classList.remove("d-none");
    if(!gamePlayScreen.classList.contains("d-none")) {
        gamePlayScreen.classList.add("d-none")
    }
    if(!gameOverMenu.classList.contains("d-none")) {
        gameOverMenu.classList.add("d-none")
    }
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    mainResult.innerText = "";
    instructions.innerText = "Choose your move:";
    resultsTitle.innerText = "Results Text";
    resultsBodyMain.innerText = "";
    resultsBodyp1.innerText = "";
    resultsBodyp2.innerText = "";
}

function displayGame() {
    gamePlayScreen.classList.remove("d-none");
    if(!main.classList.contains("d-none")) {
        main.classList.add("d-none");
    }
    if(!gameOverMenu.classList.contains("d-none")) {
        gameOverMenu.classList.add("d-none");
    }
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    instructions.innerText = "Choose your move:";
    mainResult.innerText = "";
    resultsTitle.innerText = "Results Text";
    resultsBodyMain.innerText = "";
    resultsBodyp1.innerText = "";
    resultsBodyp2.innerText = "";
}

function isGameOver() {
    if(opponent === "player") {
        if(player1Score >= matchLength) {
            resultsTitle.innerText = "Player 1 Wins!";
            resultsBodyMain.innerText = `${player1Move} beats ${player2Move}`
            resultsBodyp1.innerText = `Player 1 Score: ${player1Score}` 
            resultsBodyp2.innerText = `Player 2 Score: ${player2Score}`;
            return true;
        } else if (player2Score >= matchLength) {
            resultsTitle.innerText = "Player 2 Wins!";
            resultsBodyMain.innerText = `${player2Move} beats ${player1Move}`
            resultsBodyp1.innerText = `Player 1 Score: ${player1Score}` 
            resultsBodyp2.innerText = `Player 2 Score: ${player2Score}`;
            return true;
        }
    } else if(opponent === "computer") {
        if (computerScore >= matchLength) {
            resultsTitle.innerText = "Computer Wins!";
            resultsBodyMain.innerText = `${computerMove} beats ${player1Move}`
            resultsBodyp1.innerText = `You: ${player1Score}` 
            resultsBodyp2.innerText = `Computer: ${computerScore}`;
            return true;
        } else if (player1Score >= matchLength) {
            resultsTitle.innerText = "You Win!";
            resultsBodyMain.innerText = `${player1Move} beats ${computerMove}`
            resultsBodyp1.innerText = `You: ${player1Score}` 
            resultsBodyp2.innerText = `Computer: ${computerScore}`;
            return true;
        } 
    } 
    return false;
}

computerBestOf1Btn.addEventListener("click", () => {
    main.classList.add("d-none");
    gamePlayScreen.classList.remove("d-none");
    opponent = "computer";
    matchLength = 1;
});

computerBestOf5Btn.addEventListener("click", () => {
    main.classList.add("d-none");
    gamePlayScreen.classList.remove("d-none");
    opponent = "computer";
    matchLength = 3;
});

computerBestOf7Btn.addEventListener("click", () => {
    main.classList.add("d-none");
    gamePlayScreen.classList.remove("d-none");
    opponent = "computer";
    matchLength = 4;
});

playerBestOf1Btn.addEventListener("click", () => {
    main.classList.add("d-none");
    gamePlayScreen.classList.remove("d-none");
    opponent = "player";
    matchLength = 1;
    instructions.innerText = "Player 1:\nChoose Your Move!";
});

playerBestOf5Btn.addEventListener("click", () => {
    main.classList.add("d-none");
    gamePlayScreen.classList.remove("d-none");
    opponent = "player";
    matchLength = 3;
    instructions.innerText = "Player 1:\nChoose Your Move!";
});

playerBestOf7Btn.addEventListener("click", () => {
    main.classList.add("d-none");
    gamePlayScreen.classList.remove("d-none");
    opponent = "player";
    matchLength = 4;
    instructions.innerText = "Player 1:\nChoose Your Move!";
});

forfeit.addEventListener("click", () => {
    player1Move = "";
    player2Move = "";
    computerMove = "";
    player1Score = 0;
    player2Score = 0;
    computerScore = 0;
    opponent = "";
    matchLength = 0;
    player2Turn = false;
    displayMainMenu();
});

mainMenuReturn.addEventListener("click", () => {
    player1Move = "";
    player2Move = "";
    computerMove = "";
    player1Score = 0;
    player2Score = 0;
    computerScore = 0;
    opponent = "";
    matchLength = 0;
    player2Turn = false;
    displayMainMenu();
});

replayBtn.addEventListener("click", () => {
    player1Move = "";
    player2Move = "";
    computerMove = "";
    player1Score = 0;
    player2Score = 0;
    computerScore = 0;
    player2Turn = false;
    // gameOverText = "";
    displayGame();
});

rockBtn.addEventListener("click", async () => {
    if(opponent === "computer"){
        player1Move = "Rock";
        computerMove = await getComputerMove();
        console.log(computerMove)
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "It's a tie!";
                break;
            case "Paper":
                mainResult.innerText = "Computer wins! Paper covers Rock.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Scissors":
                mainResult.innerText = "You win! Rock crushes scissors.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Lizard":
                mainResult.innerText = "You win! Rock crushes lizard.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Spock":
                mainResult.innerText = "Computer wins! Spock vaporizes rock.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {
        if(player2Turn === false) {
            player1Move = "Rock";
            player2Turn = true;
            instructions.innerText = "Player 2: Choose Your Move!";
        } else {
            player2Move = "Rock";
            player2Turn = false;
            switch(player1Move) {
                case "Rock":
                    mainResult.innerText = "It's a tie!";
                    break;
                case "Paper":
                    mainResult.innerText = "Player 1 wins! Paper covers Rock.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Scissors":
                    mainResult.innerText = "Player 2 wins! Rock crushes scissors.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Lizard":
                    mainResult.innerText = "Player 2 wins! Rock crushes lizard.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Spock":
                    mainResult.innerText = "Player 1 wins! Spock vaporizes rock.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                default:
                    console.log("Error: Invalid computerMove comparison, switch case defaulted.")
            }
            instructions.innerText = "Player 1: Choose Your Move!";     
        }
    }
    // Conditional logic using player2Turn boolean gatekeeper
    // write the move and toggle the boolean
    // comparison function on player 2's selection.
    
    if(isGameOver()){
        main.classList.add("d-none");
        gamePlayScreen.classList.add("d-none");
        gameOverMenu.classList.remove("d-none");
    }

});

paperBtn.addEventListener("click", async () => {
    if(opponent === "computer"){
        player1Move = "Paper";
        computerMove = await getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "You win! Paper covers rock";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Paper":
                mainResult.innerText = "It's a tie!";
                break;
            case "Scissors":
                mainResult.innerText = "Computer wins! Scissors cuts paper.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Lizard":
                mainResult.innerText = "Computer wins! Lizard eats paper.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Spock":
                mainResult.innerText = "You win! Paper disproves Spock.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {
        if(player2Turn === false) {
            player1Move = "Paper";
            player2Turn = true;
            instructions.innerText = "Player 2: Choose Your Move!";
        } else {
            player2Move = "Paper";
            player2Turn = false;
            switch(player1Move) {
                case "Rock":
                    mainResult.innerText = "Player 2 wins! Paper covers rock";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Paper":
                    mainResult.innerText = "It's a tie!";
                    break;
                case "Scissors":
                    mainResult.innerText = "Player 1 wins! Scissors cuts paper.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Lizard":
                    mainResult.innerText = "Player 1 wins! Lizard eats paper.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Spock":
                    mainResult.innerText = "Player 2 wins! Paper disproves Spock.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                default:
                    console.log("Error: Invalid computerMove comparison, switch case defaulted.")
            }
            instructions.innerText = "Player 1: Choose Your Move!";     
        }
    }

    if(isGameOver()){
        main.classList.add("d-none");
        gamePlayScreen.classList.add("d-none");
        gameOverMenu.classList.remove("d-none");
    }
});

scissorsBtn.addEventListener("click", async () => {
    if(opponent === "computer") {
        player1Move = "Scissors";
        computerMove = await getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "Computer wins! Rock crushes scissors";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Paper":
                mainResult.innerText = "You win! Scissors cuts paper.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Scissors":
                mainResult.innerText = "It's a tie!";
                break;
            case "Lizard":
                mainResult.innerText = "You win! Scissors decapitates lizard.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Spock":
                mainResult.innerText = "Computer wins! Spock smashes scissors.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {
        if(player2Turn === false) {
            player1Move = "Scissors";
            player2Turn = true;
            instructions.innerText = "Player 2: Choose Your Move!";
        } else {
            player2Move = "Scissors";
            player2Turn = false;
            switch(player1Move) {
                case "Rock":
                    mainResult.innerText = "Player 1 wins! Rock crushes scissors";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Paper":
                    mainResult.innerText = "Player 2 wins! Scissors cuts paper.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Scissors":
                    mainResult.innerText = "It's a tie!";
                    break;
                case "Lizard":
                    mainResult.innerText = "Player 2 wins! Scissors decapitates lizard.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Spock":
                    mainResult.innerText = "Player 1 wins! Spock smashes scissors.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                default:
                    console.log("Error: Invalid computerMove comparison, switch case defaulted.")
            }
            instructions.innerText = "Player 1: Choose Your Move!";
        }
    }

    if(isGameOver()){
        main.classList.add("d-none");
        gamePlayScreen.classList.add("d-none");
        gameOverMenu.classList.remove("d-none");
    }
});

lizardBtn.addEventListener("click", async () => {
    if(opponent === "computer") {
        player1Move = "Lizard";
        computerMove = await getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "Computer wins! Rock crushes lizard";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Paper":
                mainResult.innerText = "You win! Lizard eats paper.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Scissors":
                mainResult.innerText = "Computer wins! Scissors decapitates lizard.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Lizard":
                mainResult.innerText = "It's a tie!";
                break;
            case "Spock":
                mainResult.innerText = "You win! Lizard poisons Spock.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    }  else {
        if(player2Turn === false) {
            player1Move = "Lizard";
            player2Turn = true;
            instructions.innerText = "Player 2: Choose Your Move!";
        } else {
            player2Move = "Lizard";
            player2Turn = false;
            switch(player1Move) {
                case "Rock":
                    mainResult.innerText = "Player 1 wins! Rock crushes lizard";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Paper":
                    mainResult.innerText = "Player 2 wins! Lizard eats paper.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Scissors":
                    mainResult.innerText = "Player 1 wins! Scissors decapitates lizard.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Lizard":
                    mainResult.innerText = "It's a tie!";
                    break;
                case "Spock":
                    mainResult.innerText = "Player 2 wins! Lizard poisons Spock.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                default:
                    console.log("Error: Invalid computerMove comparison, switch case defaulted.")
            }
            instructions.innerText = "Player 1: Choose Your Move!";     
        }
    }

    if(isGameOver()){
        main.classList.add("d-none");
        gamePlayScreen.classList.add("d-none");
        gameOverMenu.classList.remove("d-none");
    }
});

spockBtn.addEventListener("click", async () => {
    if(opponent === "computer") {
        player1Move = "Spock";
        computerMove = await getComputerMove();
        switch(computerMove) {
            case "Rock":
                mainResult.innerText = "You win! Spock vaporizes rock";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Paper":
                mainResult.innerText = "Computer wins! Paper disproves Spock.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Scissors":
                mainResult.innerText = "You win! Spock smashes scissors.";
                player1Score++;
                p1Score.innerText = `${player1Score}`;
                break;
            case "Lizard":
                mainResult.innerText = "Computer wins! Lizard poisons Spock.";
                computerScore++;
                p2Score.innerText = `${computerScore}`;
                break;
            case "Spock":
                mainResult.innerText = "It's a tie!";
                break;
            default:
                console.log("Error: Invalid computerMove comparison, switch case defaulted.")
        } 
    } else {
        if(player2Turn === false) {
            player1Move = "Spock";
            player2Turn = true;
            instructions.innerText = "Player 2: Choose Your Move!";
        } else {
            player2Move = "Spock";
            player2Turn = false;
            switch(player1Move) {
                case "Rock":
                    mainResult.innerText = "Player 2 wins! Spock vaporizes rock";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Paper":
                    mainResult.innerText = "Player 1 wins! Paper disproves Spock.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Scissors":
                    mainResult.innerText = "Player 2 wins! Spock smashes scissors.";
                    player2Score++;
                    p2Score.innerText = `${player2Score}`;
                    break;
                case "Lizard":
                    mainResult.innerText = "Player 1 wins! Lizard poisons Spock.";
                    player1Score++;
                    p1Score.innerText = `${player1Score}`;
                    break;
                case "Spock":
                    mainResult.innerText = "It's a tie!";
                    break;
                default:
                    console.log("Error: Invalid computerMove comparison, switch case defaulted.")
            }
            instructions.innerText = "Player 1: Choose Your Move!";     
        }
    }

    if(isGameOver()){
        main.classList.add("d-none");
        gamePlayScreen.classList.add("d-none");
        gameOverMenu.classList.remove("d-none");
    }
});
