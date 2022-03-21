import React, { useState } from 'react'
import Game from '../Game/Game'
import Header from '../Header/Header'
import { FaTimes } from 'react-icons/fa';


import './Dashboard.scss'

export default function Dashboard() {

  const [rulesShow, setRulesShow] = useState(false)

  return (
    <div className='dashboard'>
      <Header />
      <Game />

      {rulesShow ? <div className="rules">
        <div className="rules-header">
          <h1>Rules</h1>
          <span onClick={() => setRulesShow(false)}><FaTimes className='times'/></span>
        </div>
        <img src="/rules.svg" alt="rules" />
      </div> : null}
      <button className='rules-btn' onClick={() => setRulesShow(true)}>Rules</button>

      <div className="footer">
        Coded by Serkan Çamkerten.
      </div>
    </div>
  )
}
