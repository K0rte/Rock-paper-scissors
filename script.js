function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * choices.length));
    return choices[random]
}

let lose = 0;
let win = 0;

const playRound = (playerSelection) => {
    computerSelection = getComputerChoice();
    
    if (playerSelection == "rock" && computerSelection == "paper") {
        lose++;
        return("You lost! Paper beats rock.");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        win++;
        return("You won! Rock beats scissors.");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        lose++;
        return("You lost! Scissors beats paper.");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        win++;
        return("You won! Paper beats rock.");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        win++;
        return("You won! Scissors beats paper.");
    }
    else if (playerSelection == "scissors" && computerSelection  == "rock") {
        lose++;
        return("You lost! Rock beats scissors.");
    }
    else if (playerSelection == computerSelection) {
        return (`It's a tie! You both chose ${playerSelection}`)
    }
    else {
        return ("You didn't choose from the 3. ")
    }
}

const rescon = document.getElementById('results');
const buttons = document.querySelectorAll('button');
rescon.style.cssText = "white-space: pre;";
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        rescon.textContent = "Your score: "+ win +"     AI score: "+lose+"\r\n";
        rescon.textContent += playRound(button.id);
        if (win === 5) {
            rescon.textContent = "You won!"
            win = 0
            lose = 0
        }
        else if (lose === 5) {
            rescon.textContent = "You lost!"
            win = 0
            lose = 0
        }
    })
})