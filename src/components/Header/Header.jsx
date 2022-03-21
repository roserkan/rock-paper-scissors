import React, { useEffect, useState } from "react";
import "./Header.scss";
import { useSelector } from "react-redux";

export default function Header() {
  const [score, setScore] = useState(
    useSelector((state) => state.gameReducer.score)
  );

  useEffect(() => {
  
  }, [score])
  


  
  

  return (
    <div className="header">
      <div className="text">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="score-card">
        <span>Score</span>
        <div className="score">{score}</div>
      </div>
    </div>
  );
}
