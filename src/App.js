import React, { useLayoutEffect, useState } from "react";
import { useTimer } from  "reactjs-countdown-hook";

import Wrapper from "./components/wrapper.js"
import ScoreBoard from "./components/scoreBoard.js"
import GameBoard from "./components/gameBoard.js"
import Token from "./components/token.js"
import Select from "./components/select.js"
import Pointer from "./components/pointer.js"
import TurnTracker from "./components/turnTracker.js"
import Header from "./components/header.js"

const tokenValues = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]
];

const pointerValues = [null, null, null, null, null, null, null];

function App() {
  let [game, setGame] = useState({
    redScore: 0,
    yellowScore: 0,
    player: "red",
    tokens: tokenValues,
    selected: pointerValues,
    win: false,
  });

  const { counter, reset, } = useTimer(30, handleTimerFinish);

  function  handleTimerFinish() {
    if (!game.win) {
      alert(`${game.player === "red" ? "Time's up Player 1! It's Player 2's turn now." : "Time's up Player 2! It's Player 1's turn now."}`);
      const changePlayer = game.player === "red" ? "yellow" : "red";
      reset();
    setGame({
      ...game,
      player: changePlayer,
    })
    }
  }

  const isColumnFull = (index) => {
    return game.tokens[0][index] ? true : false;
  }

  const hoverColumn = (event, index) => {
    event.preventDefault();
    let selectedColumn = [null, null, null, null, null, null, null];
    if (!isColumnFull(index)) {
      selectedColumn[index] = game.player;
    }
    setGame({
      ...game,
      selected: selectedColumn,
    })
  }

  const checkForWin = (tokensArray, currentRow, currentColumn) => {
    let win = false;
    const four = [game.player, game.player, game.player, game.player];
    if ((tokensArray[currentRow].toString()).indexOf(four.toString()) > -1 ) {
      win = true;
      console.log(`${game.player} won`);
    }
    if ( currentRow <= 2 && tokensArray[currentRow + 1][currentColumn] === tokensArray[currentRow][currentColumn] && tokensArray[currentRow + 2][currentColumn] === tokensArray[currentRow][currentColumn] && tokensArray[currentRow + 3][currentColumn] === tokensArray[currentRow][currentColumn] ) {
      win = true;
      console.log(`${game.player} won`);
    }
    if (diagonalWin(tokensArray, currentRow, currentColumn)) {
      win = true;
    }
    return win;
  }

  const diagonalWin = (tokensArray, currentRow, currentColumn) => {
    let column = currentColumn;
    let row = currentRow;
    let tokensCountDiagonalDown = 0;
    let tokensCountDiagonalUp = 0;
    while (row < tokensArray.length && column >= 0 && tokensArray[row][column] === game.player) {
      tokensCountDiagonalDown += 1;
      column -= 1
      row += 1
    }
    column = currentColumn + 1;
    row = currentRow - 1;
    while (row >= 0 && column < tokensArray[row].length && tokensArray[row][column] === game.player) {
      tokensCountDiagonalDown += 1;
      column += 1
      row -= 1
    }
    column = currentColumn;
    row = currentRow;
    while (row < tokensArray.length && column < tokensArray[row].length && tokensArray[row][column] === game.player) {
      tokensCountDiagonalUp += 1;
      column += 1
      row += 1
    }
    column = currentColumn - 1;
    row = currentRow - 1;
    while (row >= 0 && column >= 0 && tokensArray[row][column] === game.player) {
      tokensCountDiagonalUp += 1;
      column -= 1
      row -= 1
    }
    if (tokensCountDiagonalDown >= 4 || tokensCountDiagonalUp >= 4) {
      return true;
    } else {
      return false;
    }
  }

  const makeMoveHandler = (event, index) => {
    event.preventDefault();
    let updatedTokens = game.tokens;
    const noMove = isColumnFull(index);
    let row = -1;
    if (!updatedTokens[5][index]) {
      updatedTokens[5][index] = game.player;
      row = 5;
    } else if (!updatedTokens[4][index]) {
      updatedTokens[4][index] = game.player;
      row = 4;
    } else if (!updatedTokens[3][index]) {
      updatedTokens[3][index] = game.player;
      row = 3;
    } else if (!updatedTokens[2][index]) {
      updatedTokens[2][index] = game.player;
      row = 2;
    } else if (!updatedTokens[1][index]) {
      updatedTokens[1][index] = game.player;
      row = 1;
    } else if (!updatedTokens[0][index]) {
      updatedTokens[0][index] = game.player;
      row = 0;
    }
    console.log(`${game.player} played at row ${row} and column ${index}`)
    const changePlayer = game.player === "red" ? "yellow" : "red";
    if (!noMove) {
      reset();
    }
    const win = checkForWin(updatedTokens, row, index);
    setGame({
      ...game,
      redScore: game.player === "red" && win ? game.redScore + 1 : game.redScore,
      yellowScore: game.player === "yellow" && win ? game.yellowScore + 1 : game.yellowScore,
      tokens: updatedTokens,
      player: !noMove ? changePlayer : game.player,
      win: win,
    })
  }

  const playAgainHandler = () => {
    setGame ({
      ...game,
      tokens: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      selected: pointerValues,
      win: false,
    })
    reset();
  }

  const restartHandler = () => {
    setGame ({
      ...game,
      redScore: 0,
      yellowScore: 0,
      player: "red",
      tokens: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      selected: pointerValues,
      win: false,
    })
    reset();
  }

  return (
    <Wrapper>
      <Header onClick={restartHandler}></Header>
      <ScoreBoard playerNum="playerOne" value={game.redScore}></ScoreBoard>
      <ScoreBoard playerNum="playerTwo" value={game.yellowScore}></ScoreBoard>
      <GameBoard>
        {game.tokens.flat().map((token, index) => {
          return (
            <Token
              key={index}
              colour={token === null ? "" : token}
            />
          );
        })}
      </GameBoard>
      <Select>
        {game.selected.map((pointer, index) => {
          return (
            <Pointer
              key={index}
              colour={pointer === null ? "" : pointer}
              onFocus={(event) => hoverColumn(event, index)}
              onClick={(event) => makeMoveHandler(event, index)}
            />
          );
        })}
      </Select>
      <TurnTracker player={game.player} score={game.player === "red" ? game.redScore : game.yellowScore} time={counter} win={game.win} onClick={playAgainHandler}></TurnTracker>
    </Wrapper>
  );
}

export default App;
