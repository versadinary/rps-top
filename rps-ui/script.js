const startBtn = document.querySelector(".start");

startBtn.addEventListener('click', () => {
    const startcont = document.querySelector(".start-container");
    const gamecont = document.querySelector(".game-container");
    startcont.style.display = 'none';
    gamecont.style.display = 'flex';
});