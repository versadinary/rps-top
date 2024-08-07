const startBtn = document.querySelector(".start");

startBtn.addEventListener('click', () => {
    const startcont = document.querySelector(".start-container");
    const gamecont = document.querySelector(".game-container");
    startcont.style.display = 'none';
    gamecont.style.display = 'flex';
});

let roundCount = 1;
function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());;
    return rand == 0 ? "rock" : rand == 1 ? "paper" : "scissors";
}
let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let state = 0;
    let hum = (humanChoice == "rock" ? 0 : humanChoice == "paper" ? 1 : 2);
    let comp = (computerChoice == "rock" ? 0 : computerChoice == "paper" ? 1 : 2);
    state = (comp == hum) + 2 * ((hum == 0 && comp == 2) || (hum == 1 && comp == 0) || (hum == 2 && comp == 1));

    const humDisp = document.querySelector(".your-choice");
    const compDisp = document.querySelector(".comp-choice");
    humDisp.textContent = (hum == 0 ? '🪨' : hum == 1 ? '📄' : '✂️');
    compDisp.textContent = (comp == 0 ? '🪨' : comp == 1 ? '📄' : '✂️');

}

const buttonCont = document.querySelector(".button-container");
buttonCont.addEventListener('click', (e) => {
    const target = e.target;
    
    playRound(getComputerChoice(), target.id);
});