import React, { useState } from "react";
import Die from "./Die";

const App = () => {
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: Math.random().toString(),
    };
  };

  // ? create a fn where both array is initialized and properties are defined

  const allNewDice = () => {
    const newDice = []; //? an array of objects
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  };

  const [dice, setDice] = useState(allNewDice());

  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  };

  const holdDice = (id) => {
    //? id will be required as a parameter
    setDice(
      (
        oldDice //? setDice fn as i need to update die
      ) =>
        oldDice.map((die) => {
          return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
        })
    );
  };

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      number={die.value}
      isHeld={die.isHeld}
      holdDice={(id) => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <h1>Tenzies</h1>
      <h4 className="subtext">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h4>
      <div className="dice-container">{diceElements}</div>
      <button className="btn-roll" onClick={rollDice}>
        ROLL
      </button>
    </main>
  );
};

export default App;
