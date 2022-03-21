import React from "react";
import "./Game.scss";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPick } from "../../store/actions/gameAction";


export default function Game() {
  const dispatch = useDispatch();

  const changePick = (item) => {
    dispatch(setPick(item));
  }

  return (
    <div className="game">
      <img src="/triangle.svg" alt="triangle" />
      <div className="items">
        <Link to="/play" onClick={() => changePick('paper')}>
          <div id="paper" className="item">
            <GiPaper />
          </div>
        </Link>
        <Link to="/play" onClick={() => changePick('rock')}>
          <div id="rock" className="item">
            <GiRock />
          </div>
        </Link>
        <Link to="/play" onClick={() => changePick('scissors')}>
          <div id="scissors" className="item">
            <GiScissors />
          </div>
        </Link>
      </div>
    </div>
  );
}
