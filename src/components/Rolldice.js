import React from 'react'

import { useState } from 'react';
import DiceImage1 from "../images/one.png"
import DiceImage2 from "../images/two.png"
import DiceImage3 from "../images/three.png"
import DiceImage4 from "../images/four.png"
import DiceImage5 from "../images/five.png"
import DiceImage6 from "../images/six.png"

const diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]
  function Rolldice() {
  
  const [image, setImage] = useState(diceImages[0])
  const [image2, setImage2] = useState(diceImages[1])
  
  const rollDice = () =>{
    const randomNum1 = Math.floor(Math.random() * 6)
    const randomNum2 = Math.floor(Math.random() * 6)
    setImage(diceImages[randomNum1])
    setImage2(diceImages[randomNum2])
  }
  
  
    return (
      <div className="App">

    <h1>Welcome to dice roller</h1>
    <div className='container'>
      <img className='square' src={image}></img>
      <div style={{width: '5px', display: 'inline-block'}}></div>
      <img className='square' src={image2}></img>
    </div>
    <button type="button" className="btn btn-outline-primary" onClick={rollDice}>ROLL DICE</button>

      </div>
    );
  }

export default Rolldice