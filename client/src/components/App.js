import React from "react";
import Tools from "./Tools";
import Board from "./Board";
import InfoBox from "./InfoBox";

import "../styles/App.css";

class App extends React.Component {

  render() {
    return (
      <section className='app-body'>
        <Tools />
        <Board />
        <InfoBox />
      </section>
    );
  }
}

export default App;
