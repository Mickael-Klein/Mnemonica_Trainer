import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="title">Mnemonica Trainer</div>
      <nav>
        <Link to="/">Guess By Card</Link>
        <Link to="/Guess-By-Number">Guess By Number</Link>
      </nav>
    </header>
  );
}
