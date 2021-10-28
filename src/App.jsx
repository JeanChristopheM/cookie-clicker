import React, { useEffect, useReducer } from 'react';
import Multiplier from './Multiplier.jsx';
import Helper from './Helper.jsx';
import Bonus from './Bonus.jsx';

const initialState = {
  count: 0,
  multiplier: 1,
  multiplierPrice: 10,
  cookiePerSecond: 0,
  cookiePerSecondPrice: 10,
  bonusState: false,
  bonusPrice: 1000
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase-score':
      if (state.bonusState) return { ...state, count: state.count * 2};
      else return { ...state, count: state.count + (1 * state.multiplier)};
    case 'bought-multiplier':
      return { ...state, count: state.count - state.multiplierPrice, multiplier: state.multiplier + 1, multiplierPrice: state.multiplierPrice * 2};
    case 'bought-helper':
      return { ...state, count: state.count - state.cookiePerSecondPrice, cookiePerSecond: state.cookiePerSecond + 1, cookiePerSecondPrice: Math.floor(state.cookiePerSecondPrice * 1.5)};
    case 'bought-bonus':
      return { ...state, count: state.count - state.bonusPrice, bonusState: !state.bonusState, bonusPrice: state.bonusPrice * 5};
    case 'cancel-bonus':
      return { ...state, bonusState: false};
    case 'helper':
      return { ...state, count: state.count + state.cookiePerSecond};
    default:
      return state;
  }
};

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'cancel-bonus'});
    }, 2000);
  }, [state.bonusState]);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: 'helper'});
    }, 1000);
    return () => {clearInterval(interval)}
  }, []);
  
  let cookieClick = () => {
    dispatch({type: 'increase-score'});
  }
  let handleMultiplier = () => {
    dispatch({type: 'bought-multiplier'});
  }
  let handleHelper = () => {
    dispatch({type: 'bought-helper'});
  }
  let handleBonus = () => {
    dispatch({type: 'bought-bonus'});
  }
  
  return (
    <React.Fragment>
      <header className={'header'}>
        <h1>Cookie Clicker</h1>
        <p>Score: {state.count}</p>
      </header>
      <main className={'main'}>
        <figure>
          <img id="cookie" src="./media/cookie.png" alt="Cookie" onClick={cookieClick} />
        </figure>
        <div className="main__shop">
          <h2>Shop</h2>
          <Multiplier state={state} handleBuy={handleMultiplier} />
          <Helper state={state} handleBuy={handleHelper} />
          <Bonus state={state} handleBuy={handleBonus} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
