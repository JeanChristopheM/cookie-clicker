import React from 'react';

function Multiplier({state, handleBuy}) {
    let available = false;
    if(state.count >= state.multiplierPrice) {
        available = true;
    } else {
        available = false;
    }
    return (
        <div className={'main__shop__multiplier'}>
            <h4>Multiplier</h4>
            <p>x<span>{state.multiplier + 1}</span></p>
            <p>Price: {state.multiplierPrice}cookies</p>
            {available &&
            <button type="button" className={"allowed"} onClick={handleBuy}>BUY</button>
            }
            {!available &&
            <button type="button" className={"forbidden"}>BUY</button>
            }
        </div>
    );
}

export default Multiplier;