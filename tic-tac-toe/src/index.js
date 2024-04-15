import './style.css';

const Player = (nickname) => {
  this.nickname = nickname;

  function getNickname() {
    return nickname;
  }

  return { getNickname };
};

/* ----------------------  */
//⭐️ board 상태 관련 controller
/* ----------------------  */

const boardController = (function () {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  function updateBoard(index, nickname) {
    if (gameBoard[index] === '') {
      gameBoard[index] = nickname;
      return true;
    } else {
      return false;
    }
  }

  function resetGameBoard() {
    gameBoard.forEach((element, index) => {
      gameBoard[index] = '';
    });
  }

  function getCell(index) {
    return gameBoard[index];
  }

  return { updateBoard, resetGameBoard, getCell };
})();

/* ----------------------  */
//⭐️ ui 변경 관련 controller
/* ----------------------  */

const uiController = (function () {
  const cellElements = document.querySelectorAll('.cell');
  const announceElement = document.querySelector('.announce');
  const restartBtn = document.querySelector('.start-btn');

  cellElements.forEach((cellElement) => {
    cellElement.addEventListener('click', (e) => {
      const cellIndex = e.target.dataset.value;
      const currentPlayer = gameController.getCurrentPlayer();
      const updateCheck = boardController.updateBoard(cellIndex, currentPlayer);
      if (updateCheck && !gameController.getEndGame()) {
        updateBoardUI();
        gameController.nextRound(Number(cellIndex));
      }
    });
  });

  restartBtn.addEventListener('click', () => {
    gameController.resetRound();
  });

  function updateBoardUI() {
    for (let i = 0; i < cellElements.length; i++) {
      cellElements[i].textContent = boardController.getCell(i);
    }
  }

  function changeAnnounce(checkEndGame) {
    announceElement.textContent = `player ${gameController.getCurrentPlayer()} ${
      checkEndGame ? 'Won!!!' : 'Turn!'
    } `;
  }

  function drawAnnounce() {
    announceElement.textContent = `DRAW.`;
  }

  return { changeAnnounce, updateBoardUI, drawAnnounce };
})();

/* ----------------------  */
//⭐️ game 동작 관련 controller
/* ----------------------  */

const gameController = (function () {
  let round = 1;

  let endGame = false;

  function nextRound(cellIndex) {
    if (checkWinner(cellIndex)) {
      endGame = true;
    }

    if (round === 9) {
      uiController.drawAnnounce();
      endGame = true;
      return;
    }
    uiController.changeAnnounce(gameController.getEndGame());
    round++;
  }

  function getCurrentPlayer() {
    return round % 2 === 0 ? 'O' : 'X';
  }

  function checkWinner(cellIndex) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winConditions
      .filter((combination) => combination.includes(cellIndex))
      .some((possibleCombination) =>
        possibleCombination.every(
          (index) => boardController.getCell(index) === getCurrentPlayer(),
        ),
      );
  }

  function getEndGame() {
    return endGame;
  }

  function resetRound() {
    endGame = false;
    round = 1;

    boardController.resetGameBoard();
    uiController.updateBoardUI();
    uiController.changeAnnounce(gameController.getEndGame());
  }

  return { nextRound, getCurrentPlayer, checkWinner, getEndGame, resetRound };
})();
