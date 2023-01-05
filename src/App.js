import React, { useState } from "react";

import Wrapper from "./components/wrapper.js"
import ScoreBoard from "./components/scoreBoard.js"

function App() {
  let [game, setGame] = useState({
    score: 0,
  });

  return (
    <Wrapper>
      <ScoreBoard>
        {game.score}
      </ScoreBoard>
    </Wrapper>
  );
}

export default App;
