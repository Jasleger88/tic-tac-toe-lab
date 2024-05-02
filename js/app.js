/*-------------------------------- Constants --------------------------------*/
// store the nine elements representing the sqaures on the page
const squareEls = document.querySelectorAll('.sqr');

//store the element that displays the game status on the page
const messageEl = document.querySelector('message');


/*---------------------------- Variables (state) ----------------------------*/

let board = [
    '', '', '',
    '', '', '',
    '', '', '',
]
//defining the board of the game

let currentPlayer = 'X';
//after each turn switch the current player
//switch to players X's turn

let winner = false;
// winner of the game 

let tie = false;
// both player have 4 spots filled; nobody wins

let turn = 'X';
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

// Intializing the game
const init = () => {
    board = ['', '', '', '', '', '', '', '', ''],
        currentPlayer = 'X'
    winner = false
    tie = false
    //render()
};
init()

function updateBoard() {
    board.forEach((cellText, idx) => {
        squareEls[idx].innerText = cellText;
    });
}
updateBoard()

function updateMessage() {
    const messageElement = document.getElementById('message')
    if (!winner && !tie) {
        messageElement.innerText =
            `player ${currentPlayer} turn`
    } else if (!winner && tie) {
        messageElement.innerText =
            "It's a tie, Let's Play again"
    } else {
        messageElement.innerText =
            "Congrats, You Won!"
    }
}


const render = () => {
    updateMessage()
    updateBoard()

}
squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
});

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    //columns
    [0, 4, 8], [2, 4, 6]
    //diagonals
]













/*----------------------------- Event Listeners -----------------------------*/



