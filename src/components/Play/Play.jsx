import React, { useEffect, useState } from "react";
import "./Play.scss";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { GiPaper, GiRock, GiScissors } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { setScore } from "../../store/actions/gameAction";

const picks = ["paper", "rock", "scissors"];

export default function Play() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [rulesShow, setRulesShow] = useState(false);
  const choosen = useSelector((state) => state.gameReducer.pick);
  const [currentScore, setCurrentScore] = useState(
    useSelector((state) => state.gameReducer.score)
  );
  const [counter, setCounter] = useState(3);
  const [yourItem, setYourItem] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!choosen) {
      navigate("/");
    }
    if (choosen === "paper") {
      const item = (
        <div id="paper" className="item">
          <GiPaper />
        </div>
      );
      setYourItem(item);
    } else if (choosen === "scissors") {
      const item = (
        <div id="scissors" className="item">
          <GiScissors />
        </div>
      );
      setYourItem(item);
    } else if (choosen === "rock") {
      const item = (
        <div id="rock" className="item">
          <GiRock />
        </div>
      );

      setYourItem(item);
    }
  }, [choosen]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);

    if (counter === 0) {
      const index = Math.floor(Math.random() * 3) + 0;
      const pick = picks[index];
      const item = (
        <div id={pick} className="item">
          {pick === "rock" ? <GiRock /> : null}
          {pick === "paper" ? <GiPaper /> : null}
          {pick === "scissors" ? <GiScissors /> : null}
        </div>
      );
      setCounter(item);
      if (choosen === pick) setResult("DRAW");

      if (choosen === "paper" && pick === "rock") {
        setResult("YOU WIN");
        changeScore(1);
      }
      if (choosen === "paper" && pick === "scissors") {
        setResult("YOU LOSE");
        changeScore(-1);
      }

      if (choosen === "rock" && pick === "scissors") {
        setResult("YOU WIN");
        changeScore(1);
      }
      if (choosen === "rock" && pick === "paper") {
        setResult("YOU LOSE");
        changeScore(-1);
      }

      if (choosen === "scissors" && pick === "paper") {
        setResult("YOU WIN");
        changeScore(1);
      }
      if (choosen === "scissors" && pick === "rock") {
        setResult("YOU LOSE");
        changeScore(-1);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const changeScore = (val) => {
    dispatch(setScore(currentScore + val));
  };


  return (
    <div className="dashboard">
      <Header />

      <div className="play">
        <div className="your-pick ">
          <div className="text">YOU PICKED</div>
          {yourItem}
        </div>
        <div className="play-info">
          <div className="text">{result}</div>
          {result != "" ? <Link to="/">Play Again</Link> : null}
        </div>
        <div className="opponent-pick">
          <div className="text">OPPONENT PICKED</div>
          <div className="item-empty">{counter}</div>
        </div>
      </div>

      {rulesShow ? (
        <div className="rules">
          <div className="rules-header">
            <h1>Rules</h1>
            <span onClick={() => setRulesShow(false)}>
              <FaTimes className="times" />
            </span>
          </div>
          <img src="/rules.svg" alt="rules" />
        </div>
      ) : null}
      <button className="rules-btn" onClick={() => setRulesShow(true)}>
        Rules
      </button>

      <div className="footer">Coded by Serkan Çamkerten.</div>
    </div>
  );
}
