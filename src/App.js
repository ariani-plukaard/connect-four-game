import React, { useLayoutEffect, useState } from "react";

import Wrapper from "./components/wrapper.js"
import ScoreBoard from "./components/scoreBoard.js"
import GameBoard from "./components/gameBoard.js"
import Token from "./components/token.js"
import Select from "./components/select.js"
import Pointer from "./components/pointer.js"

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
    score: 0,
    player: "red",
    tokens: tokenValues,
    selected: pointerValues,
  });

  const isColumnFull = (index) => {
    return game.tokens[0][index] ? true : false;
  }

  const hoverColumn = (event, index) => {
    event.preventDefault();
    let selectedColumn = [null, null, null, null, null, null, null];
    !isColumnFull(index) ? selectedColumn[index] = game.player : selectedColumn = selectedColumn;
    setGame({
      ...game,
      selected: selectedColumn,
    })
  }

  const makeMoveHandler = (event, index) => {
    event.preventDefault();
    let updatedTokens = game.tokens;
    const noMove = isColumnFull(index);
    !updatedTokens[5][index] ? updatedTokens[5][index] = game.player
    : !updatedTokens[4][index] ? updatedTokens[4][index] = game.player
    : !updatedTokens[3][index] ? updatedTokens[3][index] = game.player
    : !updatedTokens[2][index] ? updatedTokens[2][index] = game.player
    : !updatedTokens[1][index] ? updatedTokens[1][index] = game.player
    : !updatedTokens[0][index] ? updatedTokens[0][index] = game.player
    : updatedTokens = game.tokens;
    const changePlayer = game.player === "red" ? "yellow" : "red"
    setGame({
      ...game,
      tokens: updatedTokens,
      player: !noMove ? changePlayer : game.player,
    })
  }

  return (
    <Wrapper>
      <ScoreBoard playerNum="playerOne" value={game.score}></ScoreBoard>
      <ScoreBoard playerNum="playerTwo" value={game.score}></ScoreBoard>
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
    </Wrapper>
  );
}

export default App;
