import React from 'react';

function Bonus({state, handleBuy}) {
    let available = false;
    if(state.count >= state.bonusPrice && !state.bonusState) {
        available = true;
    } else {
        available = false;
    }
    return (
        <div className={'main__shop__multiplier'}>
            <h4>Bonus</h4>
            <p>200%cookies/click for two second</p>
            <p>Price: {state.bonusPrice}cookies</p>
            {available &&
            <button type="button" className={"allowed"} onClick={handleBuy}>BUY</button>
            }
            {!available &&
            <button type="button" className={"forbidden"}>BUY</button>
            }
        </div>
    );
}

export default Bonus;