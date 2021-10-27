import React, { useState, useEffect } from 'react';
import Multiplier from './Multiplier.jsx';
import Helper from './Helper.jsx';
import Bonus from './Bonus.jsx';

function App() {
  let [score, setScore] = useState(0);
  let [multiplier, setMultiplier] = useState(1);
  let [multiPrice, setMultiPrice] = useState(10);
  let [helper, setHelper] = useState(0);
  let [helperPrice, setHelperPrice] = useState(10);
  let [bonusState, setBonusState] = useState(false);
  let [bonusPrice, setBonusPrice] = useState(10000);
  useEffect(() => {
    const interval = setInterval(() => {
      setScore(oldScore => oldScore + helper);
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    setTimeout(() => {
      setBonusState(false);
    }, 2000);
  }, [bonusState]);
  let scorePlus = (factor) => {
    if (bonusState) {
      setScore(prevScore => prevScore * 2);
    } else {
      setScore(prevScore => prevScore + (factor * multiplier));
    }
  }
  let handleMultiplier = () => {
    setMultiplier(oldMultiplier => oldMultiplier + 1);
    setScore(oldScore => oldScore - multiPrice);
    setMultiPrice(oldPrice => oldPrice * 2);
  }
  let handleHelper = () => {
    setHelper(oldHelper => oldHelper + 1);
    setScore(oldScore => oldScore - helperPrice);
    setHelperPrice(oldPrice => Math.floor(oldPrice * 1.5));
  }
  let handleBonus = () => {
    if (!bonusState) {
      setBonusState(true);
    }
    setScore(oldScore => oldScore - bonusPrice);
    setBonusPrice(oldPrice => oldPrice *2);
  }
  return (
    <React.Fragment>
      <header className={'header'}>
        <h1>Cookie Clicker</h1>
        <p>Score: {score}</p>
      </header>
      <main className={'main'}>
        <figure>
          <img id="cookie" src="/media/cookie.png" alt="Cookie" onClick={() => {scorePlus(1)}} />
        </figure>
        <div className="main__shop">
          <h2>Shop</h2>
          <Multiplier cookies={score} currentMultiplier={multiplier} handleBuy={handleMultiplier} currentPrice={multiPrice} />
          <Helper cookies={score} currentHelper={helper} handleBuy={handleHelper} currentPrice={helperPrice} />
          <Bonus cookies={score} handleBuy={handleBonus} currentPrice={bonusPrice} currentState={bonusState} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
