import React, {FC} from "react";
import Navbar from "./Navbar";
import "../styles/Banner.css";

interface Props {
  loggedIn: boolean
}

const Header: FC<Props> = (props) => {
  const { loggedIn } = props;
  return (
    <header>
      <div className="app-container">
        <div className='header__container'>
          <h1 className="header-title">Classic Sudoku</h1>
          <h2 className="header-subtitle">Start playing straight away!</h2>
        </div>
      </div>
      <Navbar loggedIn={loggedIn} />
    </header>
  );
};
export default Header;
